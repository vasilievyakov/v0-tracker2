import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { Api } from "telegram/tl";
import { createClient } from "@/lib/supabase/server";
import { encrypt, decrypt } from "@/lib/encryption";

let clientInstance: TelegramClient | null = null;
let isConnecting = false;

export interface TelegramCredentials {
  apiId: number;
  apiHash: string;
}

export interface ChannelData {
  title: string;
  subscribers: number;
  description: string | null;
  category: string;
  language: string;
  posts: PostData[];
}

export interface PostData {
  postId: string;
  content: string;
  postUrl: string;
  viewsCount: number;
  reactionsCount: number;
  commentsCount: number;
  forwardsCount: number;
  engagementRate: number;
  publishedAt: string;
  hasMedia: boolean;
  mediaType: string | null;
}

async function getApiCredentials(): Promise<TelegramCredentials> {
  const supabase = await createClient();
  
  const { data: settings } = await supabase
    .from("api_settings")
    .select("api_id, api_hash")
    .eq("id", 1)
    .maybeSingle();

  if (!settings || !settings.api_id || !settings.api_hash) {
    throw new Error("API credentials not found. Please configure them in settings.");
  }

  // Decrypt the credentials
  const apiId = parseInt(decrypt(settings.api_id));
  const apiHash = decrypt(settings.api_hash);

  if (isNaN(apiId) || !apiHash) {
    throw new Error("Invalid API credentials format.");
  }

  return { apiId, apiHash };
}

async function getSessionString(): Promise<string | null> {
  const supabase = await createClient();
  
  const { data: session } = await supabase
    .from("telegram_sessions")
    .select("session_string")
    .eq("id", 1)
    .maybeSingle();

  if (!session || !session.session_string) {
    return null;
  }

  // Decrypt the session string
  try {
    return decrypt(session.session_string);
  } catch (error) {
    console.error("Failed to decrypt session:", error);
    return null;
  }
}

async function saveSessionString(sessionString: string, phoneNumber?: string): Promise<void> {
  const supabase = await createClient();
  
  const encryptedSession = encrypt(sessionString);

  const { error } = await supabase
    .from("telegram_sessions")
    .upsert({
      id: 1,
      session_string: encryptedSession,
      phone_number: phoneNumber || null,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    throw new Error(`Failed to save session: ${error.message}`);
  }
}

export async function getTelegramClient(): Promise<TelegramClient> {
  // Return existing client if connected
  if (clientInstance && clientInstance.connected) {
    return clientInstance;
  }

  // Prevent multiple simultaneous connections
  if (isConnecting) {
    // Wait a bit and retry
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getTelegramClient();
  }

  isConnecting = true;

  try {
    const credentials = await getApiCredentials();
    const sessionString = await getSessionString();

    const session = new StringSession(sessionString || "");

    const client = new TelegramClient(session, credentials.apiId, credentials.apiHash, {
      connectionRetries: 5,
    });

    // Connect if not already connected
    if (!client.connected) {
      await client.connect();
    }

    // If no session was saved, we need to authenticate
    if (!sessionString) {
      throw new Error("No session found. Please authenticate first.");
    }

    // Verify connection by checking if we're authorized
    if (!(await client.checkAuthorization())) {
      throw new Error("Session expired. Please re-authenticate.");
    }

    clientInstance = client;
    return client;
  } catch (error) {
    console.error("Error initializing Telegram client:", error);
    throw error;
  } finally {
    isConnecting = false;
  }
}

export async function initializeTelegramAuth(
  phoneNumber: string,
  codeCallback: (phoneCodeHash: string) => Promise<string>,
  passwordCallback?: () => Promise<string>
): Promise<string> {
  const credentials = await getApiCredentials();
  const session = new StringSession("");

  const client = new TelegramClient(session, credentials.apiId, credentials.apiHash, {
    connectionRetries: 5,
  });

  await client.connect();

  try {
    // Send code
    const result = await client.sendCode(
      {
        apiId: credentials.apiId,
        apiHash: credentials.apiHash,
      },
      phoneNumber
    );

    const phoneCodeHash = result.phoneCodeHash;
    const code = await codeCallback(phoneCodeHash);

    // Sign in with code
    try {
      await client.invoke(
        new Api.auth.SignIn({
          phoneNumber,
          phoneCodeHash,
          phoneCode: code,
        })
      );
    } catch (error: any) {
      // If 2FA is required
      if (error.errorMessage === "SESSION_PASSWORD_NEEDED" && passwordCallback) {
        const password = await passwordCallback();
        await client.invoke(
          new Api.account.GetPassword()
        );
        const { srpId, currentAlgo, srpB } = await client.invoke(
          new Api.account.GetPassword()
        );
        
        // Note: Full 2FA implementation requires SRP calculation
        // This is a simplified version - you may need to use a library like 'telegram/Password'
        throw new Error("2FA password verification requires additional implementation");
      }
      throw error;
    }

    // Save session
    const sessionString = client.session.save() as unknown as string;
    await saveSessionString(sessionString, phoneNumber);

    return sessionString;
  } finally {
    await client.disconnect();
  }
}

export async function fetchChannelData(
  username: string,
  timeRange: "all" | "year" | "month" | "update" = "month"
): Promise<ChannelData> {
  const client = await getTelegramClient();

  try {
    // Resolve channel username
    const resolved = await client.invoke(
      new Api.contacts.ResolveUsername({
        username: username.replace("@", ""),
      })
    );

    if (!(resolved.chats[0] instanceof Api.Channel)) {
      throw new Error("Resolved entity is not a channel");
    }

    const channel = resolved.chats[0] as Api.Channel;
    const channelId = channel.id;

    // Get full channel info
    const fullChannel = await client.invoke(
      new Api.channels.GetFullChannel({
        channel: channelId,
      })
    );

    const channelFull = fullChannel.fullChat as Api.ChannelFull;
    const channelInfo = fullChannel.chats[0] as Api.Channel;

    // Calculate date range
    let dateRangeMs: number;
    switch (timeRange) {
      case "all":
        dateRangeMs = 365 * 2 * 24 * 60 * 60 * 1000;
        break;
      case "year":
        dateRangeMs = 365 * 24 * 60 * 60 * 1000;
        break;
      case "month":
        dateRangeMs = 30 * 24 * 60 * 60 * 1000;
        break;
      case "update":
        dateRangeMs = 7 * 24 * 60 * 60 * 1000;
        break;
      default:
        dateRangeMs = 30 * 24 * 60 * 60 * 1000;
    }

    const cutoffDate = Math.floor((Date.now() - dateRangeMs) / 1000);

    // Fetch messages
    const messages: Api.Message[] = [];
    let offsetId = 0;
    let hasMore = true;
    const maxMessages = timeRange === "all" ? 100 : timeRange === "year" ? 50 : timeRange === "month" ? 30 : 10;

    while (hasMore && messages.length < maxMessages) {
      const history = await client.invoke(
        new Api.channels.GetHistory({
          channel: channelId,
          offsetId,
          offsetDate: cutoffDate,
          addOffset: 0,
          limit: 100,
          maxId: 0,
          minId: 0,
          hash: BigInt(0),
        })
      );

      const channelMessages = history.messages.filter(
        (msg): msg is Api.Message => msg instanceof Api.Message
      );

      if (channelMessages.length === 0) {
        hasMore = false;
        break;
      }

      messages.push(...channelMessages);

      // Check if we've reached old enough messages
      const oldestMessage = channelMessages[channelMessages.length - 1];
      if (oldestMessage.date < cutoffDate) {
        hasMore = false;
        break;
      }

      offsetId = channelMessages[channelMessages.length - 1].id;
    }

    // Process posts
    const posts: PostData[] = messages
      .filter((msg) => msg.message && msg.message.length > 0)
      .slice(0, maxMessages)
      .map((msg) => {
        const views = msg.views || 0;
        const reactions = msg.reactions
          ? Array.from(msg.reactions.results || []).reduce(
              (sum, r) => sum + (r.count || 0),
              0
            )
          : 0;
        const forwards = msg.forwards || 0;
        const replies = msg.replies
          ? (msg.replies as Api.MessageReplies).replies || 0
          : 0;

        const totalEngagement = views + reactions + forwards + replies;
        const engagementRate =
          views > 0 ? ((totalEngagement / views) * 100).toFixed(2) : "0.00";

        const hasMedia =
          msg.media instanceof Api.MessageMediaPhoto ||
          msg.media instanceof Api.MessageMediaDocument;

        let mediaType: string | null = null;
        if (msg.media instanceof Api.MessageMediaPhoto) {
          mediaType = "photo";
        } else if (msg.media instanceof Api.MessageMediaDocument) {
          const doc = msg.media.document;
          if (doc instanceof Api.Document) {
            for (const attr of doc.attributes) {
              if (attr instanceof Api.DocumentAttributeVideo) {
                mediaType = "video";
                break;
              } else if (attr instanceof Api.DocumentAttributeAudio) {
                mediaType = "audio";
                break;
              }
            }
          }
        }

        return {
          postId: msg.id.toString(),
          content: msg.message || "",
          postUrl: `https://t.me/${username.replace("@", "")}/${msg.id}`,
          viewsCount: views,
          reactionsCount: reactions,
          commentsCount: replies,
          forwardsCount: forwards,
          engagementRate: parseFloat(engagementRate),
          publishedAt: new Date(msg.date * 1000).toISOString(),
          hasMedia,
          mediaType,
        };
      });

    // Detect category and language (simplified)
    const description = channelInfo.about || "";
    const title = channelInfo.title || username;
    const fullText = `${title} ${description}`.toLowerCase();

    let category = "Other";
    if (fullText.match(/tech|ai|software|coding|programming|developer/)) {
      category = "Technology";
    } else if (fullText.match(/news|breaking|world|politics/)) {
      category = "News";
    } else if (fullText.match(/crypto|bitcoin|blockchain|defi|web3/)) {
      category = "Crypto";
    } else if (fullText.match(/business|finance|economy|market/)) {
      category = "Business";
    } else if (fullText.match(/education|learning|course|tutorial/)) {
      category = "Education";
    } else if (fullText.match(/entertainment|music|movie|game/)) {
      category = "Entertainment";
    }

    let language = "English";
    if (/[а-яА-ЯёЁ]/.test(fullText)) {
      language = "Russian";
    }

    return {
      title,
      subscribers: channelFull.participantsCount || 0,
      description: description || null,
      category,
      language,
      posts,
    };
  } catch (error) {
    console.error("Error fetching channel data:", error);
    throw error;
  }
}

