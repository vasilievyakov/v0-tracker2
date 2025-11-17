"use strict";
(() => {
var exports = {};
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 5739:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_2__]);
_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const buttonVariants = ({ variant ="default" , size ="default" , className  })=>{
    return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
        "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
        "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "destructive",
        "border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
        "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "underline-offset-4 hover:underline text-primary": variant === "link"
    }, {
        "h-10 py-2 px-4": size === "default",
        "h-9 px-3 rounded-md": size === "sm",
        "h-11 px-8 rounded-md": size === "lg",
        "h-10 w-10": size === "icon"
    }, className);
};
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , variant , size , asChild , children , ...props }, ref)=>{
    const Comp = asChild ? "span" : "button";
    if (asChild && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(children)) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(children, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(buttonVariants({
                variant,
                size,
                className
            }), children.props.className),
            ref,
            ...props
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: buttonVariants({
            variant,
            size,
            className
        }),
        ref: ref,
        ...props,
        children: children
    });
});
Button.displayName = "Button";


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ol": () => (/* binding */ CardHeader),
/* harmony export */   "SZ": () => (/* binding */ CardDescription),
/* harmony export */   "Zb": () => (/* binding */ Card),
/* harmony export */   "aY": () => (/* binding */ CardContent),
/* harmony export */   "ll": () => (/* binding */ CardTitle)
/* harmony export */ });
/* unused harmony exports CardFooter, CardAction */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_2__]);
_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Card({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "card",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    });
}
function CardHeader({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "card-header",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    });
}
function CardTitle({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "card-title",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("leading-none font-semibold", className),
        ...props
    });
}
function CardDescription({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "card-description",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-muted-foreground text-sm", className),
        ...props
    });
}
function CardAction({ className , ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "card-action",
        className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    });
}
function CardContent({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "card-content",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("px-6", className),
        ...props
    });
}
function CardFooter({ className , ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "card-footer",
        className: cn("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_2__]);
_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Input({ className , type , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: type,
        "data-slot": "input",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__, _lib_utils__WEBPACK_IMPORTED_MODULE_3__]);
([_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__, _lib_utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";




function Label({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__.Root, {
        "data-slot": "label",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pm": () => (/* binding */ useToast)
/* harmony export */ });
/* unused harmony exports reducer, toast */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
"use client";
// Inspired by react-hot-toast library

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId  } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}



/***/ }),

/***/ 6209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ce": () => (/* binding */ testApiConnection),
/* harmony export */   "yV": () => (/* binding */ saveApiSettings)
/* harmony export */ });
/* unused harmony exports addChannelByUrl, addChannel, deleteChannel */
/* harmony import */ var _lib_supabase_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6743);
/* harmony import */ var _lib_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5046);
"use server";

// import { revalidatePath } from "next/cache"; // Not available in Next.js 12

function extractChannelUsername(url) {
    // Remove @ if present
    let username = url.replace("@", "");
    // Extract from t.me URL formats
    if (username.includes("t.me/")) {
        username = username.split("t.me/")[1].split("/")[0].split("?")[0];
    }
    // Remove any trailing slashes or query params
    username = username.split("/")[0].split("?")[0];
    return username;
}
async function addChannelByUrl(channelUrl, timeRange = "month") {
    const supabase = await createClient();
    try {
        console.log("[v0] [SERVER] Starting addChannelByUrl for:", channelUrl, "timeRange:", timeRange);
        // Extract username from URL
        const username = extractChannelUsername(channelUrl);
        console.log("[v0] [SERVER] Extracted username:", username);
        if (!username) {
            console.log("[v0] [SERVER] Invalid username extracted");
            return {
                success: false,
                error: "Invalid channel URL format"
            };
        }
        const { data: existingChannel  } = await supabase.from("channels").select("id").eq("channel_username", username).maybeSingle();
        console.log("[v0] [SERVER] Existing channel check:", existingChannel ? "found" : "not found");
        // Check if channel exists and we're not updating
        if (existingChannel && timeRange !== "update") {
            console.log("[v0] [SERVER] Channel exists, returning error");
            return {
                success: false,
                error: "Channel already exists. Use 'Update' mode to fetch new posts."
            };
        }
        // Process channel immediately instead of creating background job
        const result = await processChannelDirectly({
            username,
            timeRange,
            channelId: existingChannel?.id,
            jobType: existingChannel && timeRange === "update" ? "update_channel" : "add_channel"
        });
        // revalidatePath("/"); // Not available in Next.js 12
        return result;
    } catch (error) {
        console.error("[v0] [SERVER] Error in addChannelByUrl:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error occurred"
        };
    }
}
// Process channel directly (synchronous processing)
async function processChannelDirectly(params) {
    const supabase = await createClient();
    const { username , timeRange , channelId , jobType  } = params;
    try {
        // Import telegram client function
        const { fetchChannelData  } = await __webpack_require__.e(/* import() */ 414).then(__webpack_require__.bind(__webpack_require__, 4414));
        // Fetch channel data using Telegram API
        const channelData = await fetchChannelData(username, timeRange);
        if (jobType === "update_channel" && channelId) {
            // Update existing channel
            const { data: existingPosts  } = await supabase.from("posts").select("post_id").eq("channel_id", channelId);
            const existingPostIds = new Set(existingPosts?.map((p)=>p.post_id) || []);
            const newPosts = channelData.posts.filter((post)=>!existingPostIds.has(post.postId));
            if (newPosts.length > 0) {
                const postsToInsert = newPosts.map((post)=>({
                        channel_id: channelId,
                        post_id: post.postId,
                        channel_username: username,
                        content: post.content,
                        post_url: post.postUrl,
                        views_count: post.viewsCount || 0,
                        reactions_count: post.reactionsCount || 0,
                        comments_count: post.commentsCount || 0,
                        forwards_count: post.forwardsCount || 0,
                        engagement_rate: post.engagementRate,
                        published_at: post.publishedAt,
                        has_media: post.hasMedia || false,
                        media_type: post.mediaType
                    }));
                const { error: postsError  } = await supabase.from("posts").insert(postsToInsert);
                if (postsError) {
                    throw new Error("Failed to insert posts: " + postsError.message);
                }
            }
            return {
                success: true,
                message: `Channel updated successfully. Added ${newPosts.length} new posts.`,
                postsAdded: newPosts.length
            };
        } else {
            // Add new channel
            const { data: channel , error: channelError  } = await supabase.from("channels").insert({
                channel_name: channelData.title,
                channel_url: `https://t.me/${username}`,
                channel_username: username,
                subscribers_count: channelData.subscribers || 0,
                description: channelData.description || null,
                category: channelData.category || "Other",
                language: channelData.language || "Unknown"
            }).select().single();
            if (channelError) {
                throw new Error("Failed to add channel: " + channelError.message);
            }
            // Insert posts
            if (channelData.posts && channelData.posts.length > 0) {
                const postsToInsert1 = channelData.posts.map((post)=>({
                        channel_id: channel.id,
                        post_id: post.postId,
                        channel_username: username,
                        content: post.content,
                        post_url: post.postUrl,
                        views_count: post.viewsCount || 0,
                        reactions_count: post.reactionsCount || 0,
                        comments_count: post.commentsCount || 0,
                        forwards_count: post.forwardsCount || 0,
                        engagement_rate: post.engagementRate,
                        published_at: post.publishedAt,
                        has_media: post.hasMedia || false,
                        media_type: post.mediaType
                    }));
                const { error: postsError1  } = await supabase.from("posts").insert(postsToInsert1);
                if (postsError1) {
                    console.error("[v0] [SYNC] Error inserting posts:", postsError1);
                // Don't fail the whole operation
                }
            }
            return {
                success: true,
                message: `Channel added successfully with ${channelData.posts.length} posts.`,
                channelId: channel.id,
                postsAdded: channelData.posts.length
            };
        }
    } catch (error) {
        console.error("[v0] [SYNC] Error processing channel:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error occurred"
        };
    }
}
async function saveApiSettings(apiId, apiHash) {
    const supabase = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_0__/* .createClient */ .e)();
    try {
        // Encrypt the credentials before storing
        const encryptedApiId = (0,_lib_encryption__WEBPACK_IMPORTED_MODULE_1__/* .encrypt */ .H)(apiId);
        const encryptedApiHash = (0,_lib_encryption__WEBPACK_IMPORTED_MODULE_1__/* .encrypt */ .H)(apiHash);
        const { error  } = await supabase.from("api_settings").upsert({
            id: 1,
            api_id: encryptedApiId,
            api_hash: encryptedApiHash,
            updated_at: new Date().toISOString()
        });
        if (error) {
            console.error("Error saving API settings:", error);
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true
        };
    } catch (error1) {
        console.error("Error in saveApiSettings:", error1);
        return {
            success: false,
            error: error1 instanceof Error ? error1.message : "Unknown error occurred"
        };
    }
}
async function testApiConnection() {
    try {
        const { getTelegramClient  } = await __webpack_require__.e(/* import() */ 414).then(__webpack_require__.bind(__webpack_require__, 4414));
        const client = await getTelegramClient();
        // Try to get "me" to verify connection
        const me = await client.getMe();
        return {
            success: true,
            message: `Connected as ${me.firstName || "User"} (${me.id})`
        };
    } catch (error) {
        console.error("Error testing API connection:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Connection test failed"
        };
    }
}
async function addChannel(data) {
    const supabase = await createClient();
    const { error  } = await supabase.from("channels").insert({
        channel_name: data.channel_name,
        channel_url: data.channel_url,
        subscribers_count: data.subscribers_count,
        description: data.description || null,
        category: data.category,
        language: data.language,
        engagement_rate: data.engagement_rate || null,
        tags: data.tags,
        last_post_date: new Date().toISOString()
    });
    if (error) {
        console.error("Error adding channel:", error);
        return {
            success: false,
            error: error.message
        };
    }
    // revalidatePath("/"); // Not available in Next.js 12
    return {
        success: true
    };
}
async function deleteChannel(channelId) {
    const supabase = await createClient();
    const { error  } = await supabase.from("channels").delete().eq("id", channelId);
    if (error) {
        console.error("Error deleting channel:", error);
        return {
            success: false,
            error: error.message
        };
    }
    // revalidatePath("/"); // Not available in Next.js 12
    return {
        success: true
    };
}


/***/ }),

/***/ 5046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ decrypt),
  "H": () => (/* binding */ encrypt)
});

;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_namespaceObject);
;// CONCATENATED MODULE: ./lib/encryption.ts

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 16;
const SALT_LENGTH = 64;
const TAG_LENGTH = 16;
const TAG_POSITION = SALT_LENGTH + IV_LENGTH;
const ENCRYPTED_POSITION = TAG_POSITION + TAG_LENGTH;
function getEncryptionKey() {
    const secret = process.env.ENCRYPTION_SECRET;
    if (!secret) {
        throw new Error("ENCRYPTION_SECRET environment variable is not set");
    }
    // Derive a 32-byte key from the secret using SHA-256
    return external_crypto_default().createHash("sha256").update(secret).digest();
}
function encrypt(text) {
    try {
        const key = getEncryptionKey();
        const iv = external_crypto_default().randomBytes(IV_LENGTH);
        const salt = external_crypto_default().randomBytes(SALT_LENGTH);
        const cipher = external_crypto_default().createCipheriv(ALGORITHM, key, iv);
        const encrypted = Buffer.concat([
            cipher.update(text, "utf8"),
            cipher.final()
        ]);
        const tag = cipher.getAuthTag();
        // Combine salt + iv + tag + encrypted
        const result = Buffer.concat([
            salt,
            iv,
            tag,
            encrypted
        ]);
        return result.toString("base64");
    } catch (error) {
        console.error("Encryption error:", error);
        throw new Error("Failed to encrypt data");
    }
}
function decrypt(encryptedData) {
    try {
        const key = getEncryptionKey();
        const data = Buffer.from(encryptedData, "base64");
        if (data.length < ENCRYPTED_POSITION) {
            throw new Error("Invalid encrypted data format");
        }
        const salt = data.subarray(0, SALT_LENGTH);
        const iv = data.subarray(SALT_LENGTH, TAG_POSITION);
        const tag = data.subarray(TAG_POSITION, ENCRYPTED_POSITION);
        const encrypted = data.subarray(ENCRYPTED_POSITION);
        const decipher = external_crypto_default().createDecipheriv(ALGORITHM, key, iv);
        decipher.setAuthTag(tag);
        const decrypted = Buffer.concat([
            decipher.update(encrypted),
            decipher.final()
        ]);
        return decrypted.toString("utf8");
    } catch (error) {
        console.error("Decryption error:", error);
        throw new Error("Failed to decrypt data");
    }
}


/***/ }),

/***/ 6743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ createClient)
});

;// CONCATENATED MODULE: external "@supabase/supabase-js"
const supabase_js_namespaceObject = require("@supabase/supabase-js");
;// CONCATENATED MODULE: ./lib/supabase/server.ts

function createClient() {
    return (0,supabase_js_namespaceObject.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}


/***/ }),

/***/ 2461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cn": () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6593);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_0__, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__]);
([clsx__WEBPACK_IMPORTED_MODULE_0__, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5739);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2685);
/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3223);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4345);
/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6209);
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(767);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_button__WEBPACK_IMPORTED_MODULE_2__, _components_ui_input__WEBPACK_IMPORTED_MODULE_3__, _components_ui_label__WEBPACK_IMPORTED_MODULE_4__, _components_ui_card__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_button__WEBPACK_IMPORTED_MODULE_2__, _components_ui_input__WEBPACK_IMPORTED_MODULE_3__, _components_ui_label__WEBPACK_IMPORTED_MODULE_4__, _components_ui_card__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";










function SettingsPage() {
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isTesting , 1: setIsTesting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: authStep , 1: setAuthStep  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("api");
    const { 0: phoneNumber , 1: setPhoneNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: code , 1: setCode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: phoneCodeHash , 1: setPhoneCodeHash  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: requiresPassword , 1: setRequiresPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { toast  } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_7__/* .useToast */ .pm)();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const apiId = formData.get("api_id");
        const apiHash = formData.get("api_hash");
        try {
            const result = await (0,_lib_actions__WEBPACK_IMPORTED_MODULE_6__/* .saveApiSettings */ .yV)(apiId, apiHash);
            if (result.success) {
                toast({
                    title: "Settings saved",
                    description: "Your Telegram API credentials have been saved."
                });
            } else {
                toast({
                    title: "Error",
                    description: result.error || "Failed to save settings.",
                    variant: "destructive"
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred.",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    const handleTest = async ()=>{
        setIsTesting(true);
        try {
            const result = await (0,_lib_actions__WEBPACK_IMPORTED_MODULE_6__/* .testApiConnection */ .ce)();
            if (result.success) {
                toast({
                    title: "Connection successful",
                    description: result.message || "Your Telegram API credentials are working correctly."
                });
            } else {
                toast({
                    title: "Connection failed",
                    description: result.error || "Failed to connect to Telegram API.",
                    variant: "destructive"
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred.",
                variant: "destructive"
            });
        } finally{
            setIsTesting(false);
        }
    };
    const handleRequestCode = async ()=>{
        if (!phoneNumber) {
            toast({
                title: "Error",
                description: "Please enter your phone number",
                variant: "destructive"
            });
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch("/api/telegram/auth/request-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phoneNumber
                })
            });
            const data = await response.json();
            if (data.success) {
                setPhoneCodeHash(data.phoneCodeHash);
                setAuthStep("code");
                toast({
                    title: "Code sent",
                    description: "Please check your Telegram app for the verification code."
                });
            } else {
                toast({
                    title: "Error",
                    description: data.error || "Failed to send verification code",
                    variant: "destructive"
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred.",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    const handleSignIn = async ()=>{
        if (!code || !phoneCodeHash) {
            toast({
                title: "Error",
                description: "Please enter the verification code",
                variant: "destructive"
            });
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch("/api/telegram/auth/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phoneNumber,
                    phoneCodeHash,
                    code,
                    password: requiresPassword ? password : undefined
                })
            });
            const data = await response.json();
            if (data.success) {
                setAuthStep("completed");
                toast({
                    title: "Authentication successful",
                    description: "You have successfully authenticated with Telegram."
                });
            } else {
                if (data.requiresPassword) {
                    setRequiresPassword(true);
                    setAuthStep("password");
                    toast({
                        title: "2FA Required",
                        description: "Please enter your 2FA password"
                    });
                } else {
                    toast({
                        title: "Error",
                        description: data.error || "Failed to sign in",
                        variant: "destructive"
                    });
                }
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred.",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-8 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Settings, {
                                    className: "h-8 w-8 text-blue-600"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-3xl font-bold text-balance",
                                            children: "Settings"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-muted-foreground",
                                            children: "Configure your Telegram API credentials and authenticate"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                variant: "outline",
                                children: "Back to Dashboard"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-6 max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__/* .Card */ .Zb, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__/* .CardHeader */ .Ol, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__/* .CardTitle */ .ll, {
                                            children: "Telegram API Configuration"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__/* .CardDescription */ .SZ, {
                                            children: [
                                                "Enter your Telegram API credentials to automatically fetch channel data. Get your API ID and Hash from",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://my.telegram.org",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-blue-600 hover:underline",
                                                    children: "my.telegram.org"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__/* .CardContent */ .aY, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid gap-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__/* .Label */ ._, {
                                                        htmlFor: "api_id",
                                                        children: "API ID"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .I, {
                                                        id: "api_id",
                                                        name: "api_id",
                                                        type: "number",
                                                        placeholder: "12345678",
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid gap-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__/* .Label */ ._, {
                                                        htmlFor: "api_hash",
                                                        children: "API Hash"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .I, {
                                                        id: "api_hash",
                                                        name: "api_hash",
                                                        placeholder: "0123456789abcdef0123456789abcdef",
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                        type: "submit",
                                                        disabled: isLoading,
                                                        children: [
                                                            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Loader2, {
                                                                className: "mr-2 h-4 w-4 animate-spin"
                                                            }),
                                                            "Save Settings"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                        type: "button",
                                                        variant: "outline",
                                                        onClick: handleTest,
                                                        disabled: isTesting,
                                                        children: [
                                                            isTesting && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Loader2, {
                                                                className: "mr-2 h-4 w-4 animate-spin"
                                                            }),
                                                            "Test Connection"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__/* .Card */ .Zb, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__/* .CardHeader */ .Ol, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__/* .CardTitle */ .ll, {
                                            children: "Telegram Authentication"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__/* .CardDescription */ .SZ, {
                                            children: "Authenticate with your Telegram account to enable channel data collection"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__/* .CardContent */ .aY, {
                                    className: "space-y-4",
                                    children: [
                                        authStep === "api" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "First, save your API credentials above, then proceed with authentication."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                    onClick: ()=>setAuthStep("phone"),
                                                    disabled: isLoading,
                                                    className: "w-full",
                                                    children: "Start Authentication"
                                                })
                                            ]
                                        }),
                                        authStep === "phone" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__/* .Label */ ._, {
                                                            htmlFor: "phone",
                                                            children: "Phone Number"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .I, {
                                                            id: "phone",
                                                            type: "tel",
                                                            placeholder: "+1234567890",
                                                            value: phoneNumber,
                                                            onChange: (e)=>setPhoneNumber(e.target.value),
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Enter your phone number in international format (e.g., +1234567890)"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                            onClick: handleRequestCode,
                                                            disabled: isLoading || !phoneNumber,
                                                            className: "flex-1",
                                                            children: [
                                                                isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Loader2, {
                                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                                }),
                                                                "Send Code"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                            variant: "outline",
                                                            onClick: ()=>setAuthStep("api"),
                                                            disabled: isLoading,
                                                            children: "Back"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        authStep === "code" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__/* .Label */ ._, {
                                                            htmlFor: "code",
                                                            children: "Verification Code"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .I, {
                                                            id: "code",
                                                            type: "text",
                                                            placeholder: "12345",
                                                            value: code,
                                                            onChange: (e)=>setCode(e.target.value),
                                                            required: true,
                                                            maxLength: 6
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Enter the verification code sent to your Telegram app"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                            onClick: handleSignIn,
                                                            disabled: isLoading || !code,
                                                            className: "flex-1",
                                                            children: [
                                                                isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Loader2, {
                                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                                }),
                                                                "Verify Code"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                            variant: "outline",
                                                            onClick: ()=>{
                                                                setAuthStep("phone");
                                                                setCode("");
                                                                setPhoneCodeHash(null);
                                                            },
                                                            disabled: isLoading,
                                                            children: "Back"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        authStep === "password" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__/* .Label */ ._, {
                                                            htmlFor: "password",
                                                            children: "2FA Password"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .I, {
                                                            id: "password",
                                                            type: "password",
                                                            placeholder: "Enter your 2FA password",
                                                            value: password,
                                                            onChange: (e)=>setPassword(e.target.value),
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Enter your two-factor authentication password"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                            onClick: handleSignIn,
                                                            disabled: isLoading || !password,
                                                            className: "flex-1",
                                                            children: [
                                                                isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Loader2, {
                                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                                }),
                                                                "Authenticate"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                            variant: "outline",
                                                            onClick: ()=>{
                                                                setAuthStep("code");
                                                                setPassword("");
                                                                setRequiresPassword(false);
                                                            },
                                                            disabled: isLoading,
                                                            children: "Back"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        authStep === "completed" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2 text-green-600",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_8__.CheckCircle2, {
                                                            className: "h-5 w-5"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "font-medium",
                                                            children: "Authentication successful!"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "You are now authenticated with Telegram. You can start adding channels."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                    variant: "outline",
                                                    onClick: ()=>{
                                                        setAuthStep("api");
                                                        setPhoneNumber("");
                                                        setCode("");
                                                        setPassword("");
                                                        setPhoneCodeHash(null);
                                                        setRequiresPassword(false);
                                                    },
                                                    children: "Reset Authentication"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("lucide-react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3156:
/***/ ((module) => {

module.exports = require("telegram");

/***/ }),

/***/ 1436:
/***/ ((module) => {

module.exports = require("telegram/sessions");

/***/ }),

/***/ 3029:
/***/ ((module) => {

module.exports = require("telegram/tl");

/***/ }),

/***/ 49:
/***/ ((module) => {

module.exports = import("@radix-ui/react-label");;

/***/ }),

/***/ 6593:
/***/ ((module) => {

module.exports = import("clsx");;

/***/ }),

/***/ 8097:
/***/ ((module) => {

module.exports = import("tailwind-merge");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(5956)));
module.exports = __webpack_exports__;

})();