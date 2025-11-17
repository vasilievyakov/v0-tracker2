"use strict";
exports.id = 414;
exports.ids = [414];
exports.modules = {

/***/ 4414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchChannelData": () => (/* binding */ fetchChannelData),
/* harmony export */   "getTelegramClient": () => (/* binding */ getTelegramClient),
/* harmony export */   "initializeTelegramAuth": () => (/* binding */ initializeTelegramAuth)
/* harmony export */ });
/* harmony import */ var telegram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3156);
/* harmony import */ var telegram__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(telegram__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var telegram_sessions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1436);
/* harmony import */ var telegram_sessions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(telegram_sessions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var telegram_tl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3029);
/* harmony import */ var telegram_tl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(telegram_tl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_supabase_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6743);
/* harmony import */ var _lib_encryption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5046);





let clientInstance = null;
let isConnecting = false;
async function getApiCredentials() {
    const supabase = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_3__/* .createClient */ .e)();
    const { data: settings  } = await supabase.from("api_settings").select("api_id, api_hash").eq("id", 1).maybeSingle();
    if (!settings || !settings.api_id || !settings.api_hash) {
        throw new Error("API credentials not found. Please configure them in settings.");
    }
    // Decrypt the credentials
    const apiId = parseInt((0,_lib_encryption__WEBPACK_IMPORTED_MODULE_4__/* .decrypt */ .p)(settings.api_id));
    const apiHash = (0,_lib_encryption__WEBPACK_IMPORTED_MODULE_4__/* .decrypt */ .p)(settings.api_hash);
    if (isNaN(apiId) || !apiHash) {
        throw new Error("Invalid API credentials format.");
    }
    return {
        apiId,
        apiHash
    };
}
async function getSessionString() {
    const supabase = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_3__/* .createClient */ .e)();
    const { data: session  } = await supabase.from("telegram_sessions").select("session_string").eq("id", 1).maybeSingle();
    if (!session || !session.session_string) {
        return null;
    }
    // Decrypt the session string
    try {
        return (0,_lib_encryption__WEBPACK_IMPORTED_MODULE_4__/* .decrypt */ .p)(session.session_string);
    } catch (error) {
        console.error("Failed to decrypt session:", error);
        return null;
    }
}
async function saveSessionString(sessionString, phoneNumber) {
    const supabase = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_3__/* .createClient */ .e)();
    const encryptedSession = (0,_lib_encryption__WEBPACK_IMPORTED_MODULE_4__/* .encrypt */ .H)(sessionString);
    const { error  } = await supabase.from("telegram_sessions").upsert({
        id: 1,
        session_string: encryptedSession,
        phone_number: phoneNumber || null,
        updated_at: new Date().toISOString()
    });
    if (error) {
        throw new Error(`Failed to save session: ${error.message}`);
    }
}
async function getTelegramClient() {
    // Return existing client if connected
    if (clientInstance && clientInstance.connected) {
        return clientInstance;
    }
    // Prevent multiple simultaneous connections
    if (isConnecting) {
        // Wait a bit and retry
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        return getTelegramClient();
    }
    isConnecting = true;
    try {
        const credentials = await getApiCredentials();
        const sessionString = await getSessionString();
        const session = new telegram_sessions__WEBPACK_IMPORTED_MODULE_1__.StringSession(sessionString || "");
        const client = new telegram__WEBPACK_IMPORTED_MODULE_0__.TelegramClient(session, credentials.apiId, credentials.apiHash, {
            connectionRetries: 5
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
        if (!await client.checkAuthorization()) {
            throw new Error("Session expired. Please re-authenticate.");
        }
        clientInstance = client;
        return client;
    } catch (error) {
        console.error("Error initializing Telegram client:", error);
        throw error;
    } finally{
        isConnecting = false;
    }
}
async function initializeTelegramAuth(phoneNumber, codeCallback, passwordCallback) {
    const credentials = await getApiCredentials();
    const session = new telegram_sessions__WEBPACK_IMPORTED_MODULE_1__.StringSession("");
    const client = new telegram__WEBPACK_IMPORTED_MODULE_0__.TelegramClient(session, credentials.apiId, credentials.apiHash, {
        connectionRetries: 5
    });
    await client.connect();
    try {
        // Send code
        const result = await client.sendCode({
            apiId: credentials.apiId,
            apiHash: credentials.apiHash
        }, phoneNumber);
        const phoneCodeHash = result.phoneCodeHash;
        const code = await codeCallback(phoneCodeHash);
        // Sign in with code
        try {
            await client.invoke(new telegram_tl__WEBPACK_IMPORTED_MODULE_2__.Api.auth.SignIn({
                phoneNumber,
                phoneCodeHash,
                phoneCode: code
            }));
        } catch (error) {
            // If 2FA is required
            if (error.errorMessage === "SESSION_PASSWORD_NEEDED" && passwordCallback) {
                // 2FA implementation is complex and requires SRP calculation
                // For now, throw an error indicating 2FA is not supported
                throw new Error("2FA password verification is not implemented. Please disable 2FA for this account.");
            }
            throw error;
        }
        // Save session
        const sessionString = client.session.save();
        await saveSessionString(sessionString, phoneNumber);
        return sessionString;
    } finally{
        await client.disconnect();
    }
}
async function fetchChannelData(username, timeRange = "month") {
    const client = await getTelegramClient();
    try {
        // Resolve channel username
        const resolved = await client.invoke(new telegram_tl__WEBPACK_IMPORTED_MODULE_2__.Api.contacts.ResolveUsername({
            username: username.replace("@", "")
        }));
        if (!(resolved.chats[0] instanceof telegram_tl__WEBPACK_IMPORTED_MODULE_2__.Api.Channel)) {
            throw new Error("Resolved entity is not a channel");
        }
        const channel = resolved.chats[0];
        const channelId = channel.id;
        // Get full channel info
        const fullChannel = await client.invoke(new telegram_tl__WEBPACK_IMPORTED_MODULE_2__.Api.channels.GetFullChannel({
            channel: channelId
        }));
        const channelFull = fullChannel.fullChat;
        const channelInfo = fullChannel.chats[0];
        // Calculate date range
        let dateRangeMs;
        switch(timeRange){
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
        const messages = [];
        let offsetId = 0;
        let hasMore = true;
        const maxMessages = timeRange === "all" ? 100 : timeRange === "year" ? 50 : timeRange === "month" ? 30 : 10;
        // Temporarily disabled - API compatibility issues
        // while (hasMore && messages.length < maxMessages) {
        //   const history = await client.invoke(
        //     new Api.messages.GetHistory({
        //       channel: channelId,
        //       offsetId,
        //       offsetDate: cutoffDate,
        //       addOffset: 0,
        //       limit: 100,
        //       maxId: 0,
        //       minId: 0,
        //       hash: 0,
        //     })
        //   );
        // Temporarily return empty array due to API issues
        // const channelMessages = history.messages.filter(
        //   (msg): msg is Api.Message => msg instanceof Api.Message
        // );
        // if (channelMessages.length === 0) {
        //   hasMore = false;
        //   break;
        // }
        // messages.push(...channelMessages);
        // // Check if we've reached old enough messages
        // const oldestMessage = channelMessages[channelMessages.length - 1];
        // if (oldestMessage.date < cutoffDate) {
        //   hasMore = false;
        //   break;
        // }
        // offsetId = channelMessages[channelMessages.length - 1].id;
        // }
        // Process posts - temporarily return empty array
        const posts = [];
        // Temporarily disabled due to API compatibility issues
        /*
    // messages
    //   .filter((msg) => msg.message && msg.message.length > 0)
    //   .slice(0, maxMessages)
    //   .map((msg) => {
    //     const views = msg.views || 0;
    //     const reactions = msg.reactions
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
    */ // Detect category and language (simplified) - temporarily return defaults
        const description = "Temporarily disabled";
        const title = username;
        // const fullText = `${title} ${description}`.toLowerCase();
        let category = "Other";
        // Temporarily disabled category detection
        /*
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
    // */ return {
            title,
            subscribers: 0,
            description: description || null,
            category,
            language: "English",
            posts
        };
    } catch (error) {
        console.error("Error fetching channel data:", error);
        throw error;
    }
}


/***/ })

};
;