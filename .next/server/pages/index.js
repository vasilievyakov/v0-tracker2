"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 576:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ AddChannelDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5739);
/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(499);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2685);
/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3223);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6209);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(767);
/* harmony import */ var _components_ui_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3755);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_button__WEBPACK_IMPORTED_MODULE_2__, _components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__, _components_ui_input__WEBPACK_IMPORTED_MODULE_4__, _components_ui_label__WEBPACK_IMPORTED_MODULE_5__, _components_ui_select__WEBPACK_IMPORTED_MODULE_10__]);
([_components_ui_button__WEBPACK_IMPORTED_MODULE_2__, _components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__, _components_ui_input__WEBPACK_IMPORTED_MODULE_4__, _components_ui_label__WEBPACK_IMPORTED_MODULE_5__, _components_ui_select__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";











function AddChannelDialog() {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: timeRange , 1: setTimeRange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("month");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { toast  } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_9__/* .useToast */ .pm)();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const channelUrl = formData.get("channel_url");
        try {
            console.log("[v0] [CLIENT] Adding channel:", channelUrl, "with time range:", timeRange);
            const result = await (0,_lib_actions__WEBPACK_IMPORTED_MODULE_7__/* .addChannelByUrl */ .cY)(channelUrl, timeRange);
            console.log("[v0] [CLIENT] Result received:", result);
            if (result.success) {
                toast({
                    title: "Channel added",
                    description: result.message || "The channel and its posts have been successfully added."
                });
                setOpen(false);
                e.currentTarget.reset();
                router.refresh();
            } else {
                console.error("[v0] [CLIENT] Error from server:", result.error);
                toast({
                    title: "Error",
                    description: result.error || "Failed to add channel.",
                    variant: "destructive"
                });
            }
        } catch (error) {
            console.error("[v0] [CLIENT] Exception adding channel:", error);
            toast({
                title: "Error",
                description: "An unexpected error occurred: " + (error instanceof Error ? error.message : "Unknown error"),
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Dialog */ .Vq, {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogTrigger */ .hg, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                    size: "lg",
                    className: "gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Plus, {
                            className: "h-5 w-5"
                        }),
                        "Add Channel"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogContent */ .cZ, {
                className: "max-w-md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogHeader */ .fK, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogTitle */ .$N, {
                                    children: "Add New Channel"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogDescription */ .Be, {
                                    children: "Enter a Telegram channel URL to automatically fetch posts and track data."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__/* .Label */ ._, {
                                            htmlFor: "channel_url",
                                            children: "Channel URL"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                                            id: "channel_url",
                                            name: "channel_url",
                                            placeholder: "https://t.me/techcrunch",
                                            required: true
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Supported formats: https://t.me/channel, t.me/channel, or @channel"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__/* .Label */ ._, {
                                            htmlFor: "time_range",
                                            children: "Time Range"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_select__WEBPACK_IMPORTED_MODULE_10__/* .Select */ .Ph, {
                                            value: timeRange,
                                            onValueChange: (value)=>setTimeRange(value),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_10__/* .SelectTrigger */ .i4, {
                                                    id: "time_range",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_10__/* .SelectValue */ .ki, {
                                                        placeholder: "Select time range"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_select__WEBPACK_IMPORTED_MODULE_10__/* .SelectContent */ .Bw, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_10__/* .SelectItem */ .Ql, {
                                                            value: "all",
                                                            children: "All posts (entire history)"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_10__/* .SelectItem */ .Ql, {
                                                            value: "year",
                                                            children: "Last year"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_10__/* .SelectItem */ .Ql, {
                                                            value: "month",
                                                            children: "Last month"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_10__/* .SelectItem */ .Ql, {
                                                            value: "update",
                                                            children: "Update with new posts only"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                timeRange === "all" && "Fetch all available posts from the channel",
                                                timeRange === "year" && "Fetch posts from the last 12 months",
                                                timeRange === "month" && "Fetch posts from the last 30 days",
                                                timeRange === "update" && "Only add new posts since last update"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogFooter */ .cN, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                    type: "button",
                                    variant: "outline",
                                    onClick: ()=>setOpen(false),
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                    type: "submit",
                                    disabled: isLoading,
                                    children: isLoading ? "Fetching..." : "Add Channel"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ DatabaseSetupBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5739);
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5825);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_button__WEBPACK_IMPORTED_MODULE_2__, _components_ui_alert__WEBPACK_IMPORTED_MODULE_3__]);
([_components_ui_button__WEBPACK_IMPORTED_MODULE_2__, _components_ui_alert__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";





function DatabaseSetupBanner() {
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: setupComplete , 1: setSetupComplete  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleSetup = async ()=>{
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/setup-database", {
                method: "POST"
            });
            const data = await response.json();
            if (data.success) {
                setSetupComplete(true);
                // Reload the page after 2 seconds
                setTimeout(()=>{
                    window.location.reload();
                }, 2000);
            } else {
                setError(data.error || "Failed to setup database");
            }
        } catch (err) {
            setError(err.message || "An error occurred");
        } finally{
            setIsLoading(false);
        }
    };
    if (setupComplete) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_3__/* .Alert */ .bZ, {
            className: "mb-6 border-green-500 bg-green-50",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Check, {
                    className: "h-4 w-4 text-green-600"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_3__/* .AlertTitle */ .Cd, {
                    className: "text-green-900",
                    children: "Setup Complete!"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_3__/* .AlertDescription */ .X, {
                    className: "text-green-800",
                    children: "Database has been set up successfully. Reloading..."
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_3__/* .Alert */ .bZ, {
        className: "mb-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__.AlertCircle, {
                className: "h-4 w-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_3__/* .AlertTitle */ .Cd, {
                children: "Database Setup Required"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_3__/* .AlertDescription */ .X, {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "flex-1",
                        children: "The database tables need to be created. Click the button to set up the database with sample data."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                        onClick: handleSetup,
                        disabled: isLoading,
                        size: "sm",
                        children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Loader2, {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }),
                                "Setting up..."
                            ]
                        }) : "Setup Database"
                    })
                ]
            }),
            error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-2 text-sm text-red-600",
                children: [
                    "Error: ",
                    error
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ PostFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4345);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2685);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5739);
/* harmony import */ var _components_ui_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3755);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_card__WEBPACK_IMPORTED_MODULE_3__, _components_ui_input__WEBPACK_IMPORTED_MODULE_4__, _components_ui_button__WEBPACK_IMPORTED_MODULE_5__, _components_ui_select__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_card__WEBPACK_IMPORTED_MODULE_3__, _components_ui_input__WEBPACK_IMPORTED_MODULE_4__, _components_ui_button__WEBPACK_IMPORTED_MODULE_5__, _components_ui_select__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";








function PostFilters({ channels  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const query = router.query;
    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.search || "");
    const { 0: channelUsername , 1: setChannelUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.channelUsername || "all");
    const { 0: minViews , 1: setMinViews  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.minViews || "");
    const { 0: minEngagement , 1: setMinEngagement  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.minEngagement || "");
    const { 0: hasMedia , 1: setHasMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.hasMedia || "all");
    const applyFilters = ()=>{
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (channelUsername && channelUsername !== "all") params.set("channelUsername", channelUsername);
        if (minViews) params.set("minViews", minViews);
        if (minEngagement) params.set("minEngagement", minEngagement);
        if (hasMedia && hasMedia !== "all") params.set("hasMedia", hasMedia);
        router.push(`/?${params.toString()}`);
    };
    const clearFilters = ()=>{
        setSearch("");
        setChannelUsername("all");
        setMinViews("");
        setMinEngagement("");
        setHasMedia("all");
        router.push("/");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zb, {
        className: "mb-6 border-none shadow-sm",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardContent */ .aY, {
            className: "pt-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid gap-4 md:grid-cols-2 lg:grid-cols-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Search, {
                                        className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                                        placeholder: "Search in content...",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        onKeyDown: (e)=>e.key === "Enter" && applyFilters(),
                                        className: "pl-9"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .Ph, {
                            value: channelUsername,
                            onValueChange: setChannelUsername,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectTrigger */ .i4, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectValue */ .ki, {
                                        placeholder: "All channels"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectContent */ .Bw, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectItem */ .Ql, {
                                            value: "all",
                                            children: "All channels"
                                        }),
                                        channels.map((channel)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectItem */ .Ql, {
                                                value: channel.channel_username,
                                                children: channel.channel_name
                                            }, channel.id))
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                            type: "number",
                            placeholder: "Min views",
                            value: minViews,
                            onChange: (e)=>setMinViews(e.target.value),
                            onKeyDown: (e)=>e.key === "Enter" && applyFilters()
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                            type: "number",
                            placeholder: "Min engagement %",
                            value: minEngagement,
                            onChange: (e)=>setMinEngagement(e.target.value),
                            onKeyDown: (e)=>e.key === "Enter" && applyFilters()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-4 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .Ph, {
                            value: hasMedia,
                            onValueChange: setHasMedia,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectTrigger */ .i4, {
                                    className: "w-[180px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectValue */ .ki, {
                                        placeholder: "Media type"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectContent */ .Bw, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectItem */ .Ql, {
                                            value: "all",
                                            children: "All posts"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectItem */ .Ql, {
                                            value: "true",
                                            children: "With media"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select__WEBPACK_IMPORTED_MODULE_6__/* .SelectItem */ .Ql, {
                                            value: "false",
                                            children: "Text only"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ml-auto flex gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                    onClick: clearFilters,
                                    variant: "outline",
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_7__.X, {
                                            className: "mr-2 h-4 w-4"
                                        }),
                                        "Clear"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                    onClick: applyFilters,
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Search, {
                                            className: "mr-2 h-4 w-4"
                                        }),
                                        "Apply Filters"
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

/***/ 3171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ PostStats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4345);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_card__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function PostStats({ posts  }) {
    const totalPosts = posts.length;
    const totalViews = posts.reduce((sum, post)=>sum + post.views_count, 0);
    const averageEngagement = posts.reduce((sum, post)=>sum + (post.engagement_rate || 0), 0) / (posts.length || 1);
    const totalInteractions = posts.reduce((sum, post)=>sum + post.reactions_count + post.comments_count + post.forwards_count, 0);
    const stats = [
        {
            title: "Total Posts",
            value: totalPosts.toLocaleString(),
            icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__.FileText,
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            title: "Total Views",
            value: totalViews.toLocaleString(),
            icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__.Eye,
            color: "text-green-600",
            bgColor: "bg-green-50"
        },
        {
            title: "Avg Engagement",
            value: `${averageEngagement.toFixed(1)}%`,
            icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__.TrendingUp,
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            title: "Total Interactions",
            value: totalInteractions.toLocaleString(),
            icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__.MessageCircle,
            color: "text-orange-600",
            bgColor: "bg-orange-50"
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
        children: stats.map((stat)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zb, {
                className: "border-none shadow-sm",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardHeader */ .Ol, {
                        className: "flex flex-row items-center justify-between pb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardTitle */ .ll, {
                                className: "text-sm font-medium text-slate-600",
                                children: stat.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `rounded-lg p-2 ${stat.bgColor}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(stat.icon, {
                                    className: `h-4 w-4 ${stat.color}`
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardContent */ .aY, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-2xl font-bold text-slate-900",
                            children: stat.value
                        })
                    })
                ]
            }, stat.title))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ PostsTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6614);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4345);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5034);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5739);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8248);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_table__WEBPACK_IMPORTED_MODULE_1__, _components_ui_card__WEBPACK_IMPORTED_MODULE_2__, _components_ui_badge__WEBPACK_IMPORTED_MODULE_3__, _components_ui_button__WEBPACK_IMPORTED_MODULE_4__, date_fns__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_table__WEBPACK_IMPORTED_MODULE_1__, _components_ui_card__WEBPACK_IMPORTED_MODULE_2__, _components_ui_badge__WEBPACK_IMPORTED_MODULE_3__, _components_ui_button__WEBPACK_IMPORTED_MODULE_4__, date_fns__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";







function PostsTable({ posts  }) {
    const exportToCSV = ()=>{
        const headers = [
            "Channel",
            "Content",
            "Published",
            "Views",
            "Reactions",
            "Comments",
            "Forwards",
            "Engagement Rate",
            "URL", 
        ];
        const rows = posts.map((post)=>[
                post.channel?.channel_name || post.channel_username,
                (post.content || "").replace(/"/g, '""').substring(0, 200),
                post.published_at,
                post.views_count.toString(),
                post.reactions_count.toString(),
                post.comments_count.toString(),
                post.forwards_count.toString(),
                post.engagement_rate?.toString() || "",
                post.post_url, 
            ]);
        const csvContent = [
            headers,
            ...rows
        ].map((row)=>row.map((cell)=>`"${cell}"`).join(",")).join("\n");
        const blob = new Blob([
            csvContent
        ], {
            type: "text/csv"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `telegram-posts-${new Date().toISOString().split("T")[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    const getMediaIcon = (mediaType)=>{
        if (!mediaType) return null;
        switch(mediaType){
            case "photo":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ImageIcon, {
                    className: "h-4 w-4"
                });
            case "video":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Video, {
                    className: "h-4 w-4"
                });
            case "document":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.FileText, {
                    className: "h-4 w-4"
                });
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Zb, {
        className: "border-none shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__/* .CardHeader */ .Ol, {
                className: "flex flex-row items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__/* .CardTitle */ .ll, {
                        className: "text-xl font-semibold text-slate-900",
                        children: [
                            "Posts (",
                            posts.length,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        onClick: exportToCSV,
                        variant: "outline",
                        size: "sm",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Download, {
                                className: "mr-2 h-4 w-4"
                            }),
                            "Export CSV"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__/* .CardContent */ .aY, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .Table */ .iA, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableHeader */ .xD, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableRow */ .SC, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableHead */ .ss, {
                                            className: "w-[200px]",
                                            children: "Channel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableHead */ .ss, {
                                            className: "w-[400px]",
                                            children: "Content"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableHead */ .ss, {
                                            children: "Published"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableHead */ .ss, {
                                            className: "text-right",
                                            children: "Views"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableHead */ .ss, {
                                            className: "text-right",
                                            children: "Engagement"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableHead */ .ss, {
                                            children: "Stats"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableHead */ .ss, {
                                            className: "text-right",
                                            children: "Actions"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableBody */ .RM, {
                                children: posts.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableRow */ .SC, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableCell */ .pj, {
                                        colSpan: 7,
                                        className: "h-24 text-center text-slate-500",
                                        children: "No posts found. Try adjusting your filters or add a channel."
                                    })
                                }) : posts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableRow */ .SC, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableCell */ .pj, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "font-semibold text-slate-900",
                                                            children: post.channel?.channel_name || post.channel_username
                                                        }),
                                                        post.channel?.category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_3__/* .Badge */ .C, {
                                                            variant: "secondary",
                                                            className: "mt-1 text-xs",
                                                            children: post.channel.category
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableCell */ .pj, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "max-w-md",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "line-clamp-2 text-sm text-slate-700",
                                                            children: post.content || "No content"
                                                        }),
                                                        post.has_media && post.media_type && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "mt-2 flex items-center gap-1 text-xs text-slate-500",
                                                            children: [
                                                                getMediaIcon(post.media_type),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "capitalize",
                                                                    children: post.media_type
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableCell */ .pj, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm text-slate-600",
                                                    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.formatDistanceToNow)(new Date(post.published_at), {
                                                        addSuffix: true
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableCell */ .pj, {
                                                className: "text-right",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center justify-end gap-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Eye, {
                                                            className: "h-4 w-4 text-slate-400"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-semibold",
                                                            children: post.views_count.toLocaleString()
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableCell */ .pj, {
                                                className: "text-right",
                                                children: post.engagement_rate && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "font-medium text-green-600",
                                                    children: [
                                                        post.engagement_rate,
                                                        "%"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableCell */ .pj, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col gap-1 text-xs text-slate-600",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Heart, {
                                                                    className: "h-3 w-3"
                                                                }),
                                                                post.reactions_count
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.MessageCircle, {
                                                                    className: "h-3 w-3"
                                                                }),
                                                                post.comments_count
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Share2, {
                                                                    className: "h-3 w-3"
                                                                }),
                                                                post.forwards_count
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .TableCell */ .pj, {
                                                className: "text-right",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    asChild: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: post.post_url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ExternalLink, {
                                                            className: "h-4 w-4"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }, post.id))
                            })
                        ]
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cd": () => (/* binding */ AlertTitle),
/* harmony export */   "X": () => (/* binding */ AlertDescription),
/* harmony export */   "bZ": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6926);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([class_variance_authority__WEBPACK_IMPORTED_MODULE_2__, _lib_utils__WEBPACK_IMPORTED_MODULE_3__]);
([class_variance_authority__WEBPACK_IMPORTED_MODULE_2__, _lib_utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const alertVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className , variant , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(alertVariants({
            variant
        }), className),
        ...props
    });
}
function AlertTitle({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "alert-title",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    });
}
function AlertDescription({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "alert-description",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
        ...props
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ Badge)
/* harmony export */ });
/* unused harmony export badgeVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4338);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6926);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__]);
([_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const badgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className , variant , asChild =false , ...props }) {
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.Slot : "span";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        "data-slot": "badge",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(badgeVariants({
            variant
        }), className),
        ...props
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$N": () => (/* binding */ DialogTitle),
/* harmony export */   "Be": () => (/* binding */ DialogDescription),
/* harmony export */   "Vq": () => (/* binding */ Dialog),
/* harmony export */   "cN": () => (/* binding */ DialogFooter),
/* harmony export */   "cZ": () => (/* binding */ DialogContent),
/* harmony export */   "fK": () => (/* binding */ DialogHeader),
/* harmony export */   "hg": () => (/* binding */ DialogTrigger)
/* harmony export */ });
/* unused harmony exports DialogClose, DialogOverlay, DialogPortal */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7715);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__]);
([_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";





function Dialog({ ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Root, {
        "data-slot": "dialog",
        ...props
    });
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Trigger, {
        "data-slot": "dialog-trigger",
        ...props
    });
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Portal, {
        "data-slot": "dialog-portal",
        ...props
    });
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ _jsx(DialogPrimitive.Close, {
        "data-slot": "dialog-close",
        ...props
    });
}
function DialogOverlay({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Overlay, {
        "data-slot": "dialog-overlay",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    });
}
function DialogContent({ className , children , showCloseButton =true , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DialogOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Content, {
                "data-slot": "dialog-content",
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Close, {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.XIcon, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function DialogHeader({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "dialog-header",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    });
}
function DialogFooter({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "dialog-footer",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    });
}
function DialogTitle({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Title, {
        "data-slot": "dialog-title",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("text-lg leading-none font-semibold", className),
        ...props
    });
}
function DialogDescription({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Description, {
        "data-slot": "dialog-description",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("text-muted-foreground text-sm", className),
        ...props
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3755:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bw": () => (/* binding */ SelectContent),
/* harmony export */   "Ph": () => (/* binding */ Select),
/* harmony export */   "Ql": () => (/* binding */ SelectItem),
/* harmony export */   "i4": () => (/* binding */ SelectTrigger),
/* harmony export */   "ki": () => (/* binding */ SelectValue)
/* harmony export */ });
/* unused harmony exports SelectGroup, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3567);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__]);
([_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";





function Select({ ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Root, {
        "data-slot": "select",
        ...props
    });
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ _jsx(SelectPrimitive.Group, {
        "data-slot": "select-group",
        ...props
    });
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Value, {
        "data-slot": "select-value",
        ...props
    });
}
function SelectTrigger({ className , size ="default" , children , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Trigger, {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                    className: "size-4 opacity-50"
                })
            })
        ]
    });
}
function SelectContent({ className , children , position ="popper" , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Portal, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Content, {
            "data-slot": "select-content",
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectScrollUpButton, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Viewport, {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectScrollDownButton, {})
            ]
        })
    });
}
function SelectLabel({ className , ...props }) {
    return /*#__PURE__*/ _jsx(SelectPrimitive.Label, {
        "data-slot": "select-label",
        className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    });
}
function SelectItem({ className , children , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Item, {
        "data-slot": "select-item",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ItemIndicator, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, {
                        className: "size-4"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ItemText, {
                children: children
            })
        ]
    });
}
function SelectSeparator({ className , ...props }) {
    return /*#__PURE__*/ _jsx(SelectPrimitive.Separator, {
        "data-slot": "select-separator",
        className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    });
}
function SelectScrollUpButton({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ScrollUpButton, {
        "data-slot": "select-scroll-up-button",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ChevronUpIcon, {
            className: "size-4"
        })
    });
}
function SelectScrollDownButton({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ScrollDownButton, {
        "data-slot": "select-scroll-down-button",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
            className: "size-4"
        })
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RM": () => (/* binding */ TableBody),
/* harmony export */   "SC": () => (/* binding */ TableRow),
/* harmony export */   "iA": () => (/* binding */ Table),
/* harmony export */   "pj": () => (/* binding */ TableCell),
/* harmony export */   "ss": () => (/* binding */ TableHead),
/* harmony export */   "xD": () => (/* binding */ TableHeader)
/* harmony export */ });
/* unused harmony exports TableFooter, TableCaption */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_2__]);
_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";



function Table({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
            "data-slot": "table",
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("w-full caption-bottom text-sm", className),
            ...props
        })
    });
}
function TableHeader({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        "data-slot": "table-header",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr]:border-b", className),
        ...props
    });
}
function TableBody({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        "data-slot": "table-body",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr:last-child]:border-0", className),
        ...props
    });
}
function TableFooter({ className , ...props }) {
    return /*#__PURE__*/ _jsx("tfoot", {
        "data-slot": "table-footer",
        className: cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    });
}
function TableRow({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
        "data-slot": "table-row",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    });
}
function TableHead({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
        "data-slot": "table-head",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    });
}
function TableCell({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
        "data-slot": "table-cell",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    });
}
function TableCaption({ className , ...props }) {
    return /*#__PURE__*/ _jsx("caption", {
        "data-slot": "table-caption",
        className: cn("text-muted-foreground mt-4 text-sm", className),
        ...props
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_supabase_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2038);
/* harmony import */ var _components_posts_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6567);
/* harmony import */ var _components_post_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4202);
/* harmony import */ var _components_post_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3171);
/* harmony import */ var _components_add_channel_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(576);
/* harmony import */ var _components_database_setup_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7884);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5739);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_posts_table__WEBPACK_IMPORTED_MODULE_2__, _components_post_filters__WEBPACK_IMPORTED_MODULE_3__, _components_post_stats__WEBPACK_IMPORTED_MODULE_4__, _components_add_channel_dialog__WEBPACK_IMPORTED_MODULE_5__, _components_database_setup_banner__WEBPACK_IMPORTED_MODULE_6__, _components_ui_button__WEBPACK_IMPORTED_MODULE_8__]);
([_components_posts_table__WEBPACK_IMPORTED_MODULE_2__, _components_post_filters__WEBPACK_IMPORTED_MODULE_3__, _components_post_stats__WEBPACK_IMPORTED_MODULE_4__, _components_add_channel_dialog__WEBPACK_IMPORTED_MODULE_5__, _components_database_setup_banner__WEBPACK_IMPORTED_MODULE_6__, _components_ui_button__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










async function Home({ searchParams  }) {
    const params = searchParams || {};
    const supabase = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_1__/* .createClient */ .e)();
    let isSetup = true;
    let posts = null;
    let channels = null;
    try {
        let query = supabase.from("posts").select(`
        *,
        channel:channels(*)
      `).order("published_at", {
            ascending: false
        });
        if (params.search) {
            query = query.ilike("content", `%${params.search}%`);
        }
        if (params.channelUsername) {
            query = query.eq("channel_username", params.channelUsername);
        }
        if (params.minViews) {
            query = query.gte("views_count", parseInt(params.minViews));
        }
        if (params.maxViews) {
            query = query.lte("views_count", parseInt(params.maxViews));
        }
        if (params.minEngagement) {
            query = query.gte("engagement_rate", parseFloat(params.minEngagement));
        }
        if (params.hasMedia === "true") {
            query = query.eq("has_media", true);
        }
        if (params.dateFrom) {
            query = query.gte("published_at", params.dateFrom);
        }
        if (params.dateTo) {
            query = query.lte("published_at", params.dateTo);
        }
        const { data , error  } = await query;
        if (error) {
            // Check if error is due to table not existing
            if (error.code === "PGRST205" || error.message.includes("Could not find the table")) {
                console.log("[v0] Posts table not found, database setup required");
                isSetup = false;
            } else {
                console.error("Error fetching posts:", error);
            }
        } else {
            posts = data;
        }
        // Get all channels for filter dropdown
        if (isSetup) {
            const { data: channelsData  } = await supabase.from("channels").select("*").order("channel_name");
            channels = channelsData;
        }
    } catch (error1) {
        console.error("[v0] Error in database query:", error1);
        isSetup = false;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto max-w-7xl p-6 lg:p-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-8 flex items-start justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-4xl font-bold tracking-tight text-slate-900",
                                    children: "Telegram Posts Tracker"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-2 text-lg text-slate-600",
                                    children: "Monitor and analyze posts from Telegram channels"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    href: "/settings",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                        variant: "outline",
                                        size: "lg",
                                        className: "gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Settings, {
                                                className: "h-5 w-5"
                                            }),
                                            "Settings"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_add_channel_dialog__WEBPACK_IMPORTED_MODULE_5__/* .AddChannelDialog */ .q, {})
                            ]
                        })
                    ]
                }),
                !isSetup ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_database_setup_banner__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseSetupBanner */ .y, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_stats__WEBPACK_IMPORTED_MODULE_4__/* .PostStats */ .i, {
                            posts: posts || []
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_filters__WEBPACK_IMPORTED_MODULE_3__/* .PostFilters */ .t, {
                            channels: channels || []
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_posts_table__WEBPACK_IMPORTED_MODULE_2__/* .PostsTable */ .N, {
                            posts: posts || []
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

/***/ 2885:
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 7715:
/***/ ((module) => {

module.exports = import("@radix-ui/react-dialog");;

/***/ }),

/***/ 49:
/***/ ((module) => {

module.exports = import("@radix-ui/react-label");;

/***/ }),

/***/ 3567:
/***/ ((module) => {

module.exports = import("@radix-ui/react-select");;

/***/ }),

/***/ 4338:
/***/ ((module) => {

module.exports = import("@radix-ui/react-slot");;

/***/ }),

/***/ 6926:
/***/ ((module) => {

module.exports = import("class-variance-authority");;

/***/ }),

/***/ 6593:
/***/ ((module) => {

module.exports = import("clsx");;

/***/ }),

/***/ 8248:
/***/ ((module) => {

module.exports = import("date-fns");;

/***/ }),

/***/ 8097:
/***/ ((module) => {

module.exports = import("tailwind-merge");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,210], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();