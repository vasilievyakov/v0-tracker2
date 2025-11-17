"use strict";
(() => {
var exports = {};
exports.id = 592;
exports.ids = [592];
exports.modules = {

/***/ 2885:
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 2824:
/***/ ((module) => {

module.exports = require("next/server");

/***/ }),

/***/ 3156:
/***/ ((module) => {

module.exports = require("telegram");

/***/ }),

/***/ 1436:
/***/ ((module) => {

module.exports = require("telegram/sessions");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "POST": () => (/* binding */ POST)
});

// EXTERNAL MODULE: external "next/server"
var server_ = __webpack_require__(2824);
// EXTERNAL MODULE: external "telegram"
var external_telegram_ = __webpack_require__(3156);
// EXTERNAL MODULE: external "telegram/sessions"
var sessions_ = __webpack_require__(1436);
;// CONCATENATED MODULE: external "telegram/tl"
const tl_namespaceObject = require("telegram/tl");
// EXTERNAL MODULE: ./lib/supabase/server.ts
var server = __webpack_require__(9802);
// EXTERNAL MODULE: ./lib/encryption.ts
var encryption = __webpack_require__(3062);
;// CONCATENATED MODULE: ./pages/api/telegram/auth/sign-in/index.ts






async function POST(request) {
    try {
        const { phoneNumber , phoneCodeHash , code , password  } = await request.json();
        if (!phoneNumber || !phoneCodeHash || !code) {
            return server_.NextResponse.json({
                error: "Phone number, code hash, and code are required"
            }, {
                status: 400
            });
        }
        // Get API credentials
        const supabase = await (0,server/* createClient */.e)();
        const { data: settings  } = await supabase.from("api_settings").select("api_id, api_hash").eq("id", 1).maybeSingle();
        if (!settings || !settings.api_id || !settings.api_hash) {
            return server_.NextResponse.json({
                error: "API credentials not configured"
            }, {
                status: 400
            });
        }
        const apiId = parseInt((0,encryption/* decrypt */.p)(settings.api_id));
        const apiHash = (0,encryption/* decrypt */.p)(settings.api_hash);
        if (isNaN(apiId) || !apiHash) {
            return server_.NextResponse.json({
                error: "Invalid API credentials"
            }, {
                status: 400
            });
        }
        // Create temporary client for authentication
        const session = new sessions_.StringSession("");
        const client = new external_telegram_.TelegramClient(session, apiId, apiHash, {
            connectionRetries: 5
        });
        await client.connect();
        try {
            // Sign in with code
            await client.invoke(new tl_namespaceObject.Api.auth.SignIn({
                phoneNumber,
                phoneCodeHash,
                phoneCode: code
            }));
        } catch (error) {
            // Check if 2FA is required
            if (error.errorMessage === "SESSION_PASSWORD_NEEDED" || error.code === 401) {
                if (!password) {
                    await client.disconnect();
                    return server_.NextResponse.json({
                        error: "2FA password required",
                        requiresPassword: true
                    }, {
                        status: 400
                    });
                }
                // Handle 2FA - use the client's built-in method which handles SRP automatically
                try {
                    await client.signInWithPassword(phoneNumber, password);
                } catch (passwordError) {
                    await client.disconnect();
                    throw new Error(passwordError.message || "Failed to verify 2FA password");
                }
            } else {
                await client.disconnect();
                throw error;
            }
        }
        // Save session
        const sessionString = client.session.save();
        const encryptedSession = (0,encryption/* encrypt */.H)(sessionString);
        await supabase.from("telegram_sessions").upsert({
            id: 1,
            session_string: encryptedSession,
            phone_number: phoneNumber,
            updated_at: new Date().toISOString()
        });
        await client.disconnect();
        return server_.NextResponse.json({
            success: true,
            message: "Successfully authenticated"
        });
    } catch (error1) {
        console.error("Error signing in:", error1);
        return server_.NextResponse.json({
            error: error1 instanceof Error ? error1.message : "Failed to sign in"
        }, {
            status: 500
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769], () => (__webpack_exec__(725)));
module.exports = __webpack_exports__;

})();