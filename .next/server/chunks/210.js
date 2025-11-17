"use strict";
exports.id = 210;
exports.ids = [210];
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
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4338);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6926);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__]);
([_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className , variant , size , asChild =false , ...props }) {
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.Slot : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        "data-slot": "button",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    });
}


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
/* harmony export */   "cY": () => (/* binding */ addChannelByUrl),
/* harmony export */   "ce": () => (/* binding */ testApiConnection),
/* harmony export */   "yV": () => (/* binding */ saveApiSettings)
/* harmony export */ });
/* unused harmony exports addChannel, deleteChannel */
/* harmony import */ var _lib_supabase_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2038);
/* harmony import */ var _lib_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2052);
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
    const supabase = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_0__/* .createClient */ .e)();
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
    const supabase = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_0__/* .createClient */ .e)();
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

/***/ 2052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ encrypt),
/* harmony export */   "p": () => (/* binding */ decrypt)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

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
    return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash("sha256").update(secret).digest();
}
function encrypt(text) {
    try {
        const key = getEncryptionKey();
        const iv = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(IV_LENGTH);
        const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(SALT_LENGTH);
        const cipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createCipheriv(ALGORITHM, key, iv);
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
        const decipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createDecipheriv(ALGORITHM, key, iv);
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

/***/ 2038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ createClient)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

function createClient() {
    return (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
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

/***/ })

};
;