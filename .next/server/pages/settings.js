"use strict";
(() => {
var exports = {};
exports.id = 662;
exports.ids = [662];
exports.modules = {

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,210], () => (__webpack_exec__(5956)));
module.exports = __webpack_exports__;

})();