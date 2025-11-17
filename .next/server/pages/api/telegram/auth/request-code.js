"use strict";
(() => {
var exports = {};
exports.id = 318;
exports.ids = [318];
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

/***/ 5994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POST": () => (/* binding */ POST)
/* harmony export */ });
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2824);
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var telegram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3156);
/* harmony import */ var telegram__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(telegram__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var telegram_sessions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1436);
/* harmony import */ var telegram_sessions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(telegram_sessions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_supabase_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9802);
/* harmony import */ var _lib_encryption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3062);





async function POST(request) {
    try {
        const { phoneNumber  } = await request.json();
        if (!phoneNumber) {
            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
                error: "Phone number is required"
            }, {
                status: 400
            });
        }
        // Get API credentials
        const supabase = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_3__/* .createClient */ .e)();
        const { data: settings  } = await supabase.from("api_settings").select("api_id, api_hash").eq("id", 1).maybeSingle();
        if (!settings || !settings.api_id || !settings.api_hash) {
            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
                error: "API credentials not configured"
            }, {
                status: 400
            });
        }
        const apiId = parseInt((0,_lib_encryption__WEBPACK_IMPORTED_MODULE_4__/* .decrypt */ .p)(settings.api_id));
        const apiHash = (0,_lib_encryption__WEBPACK_IMPORTED_MODULE_4__/* .decrypt */ .p)(settings.api_hash);
        if (isNaN(apiId) || !apiHash) {
            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
                error: "Invalid API credentials"
            }, {
                status: 400
            });
        }
        // Create temporary client for authentication
        const session = new telegram_sessions__WEBPACK_IMPORTED_MODULE_2__.StringSession("");
        const client = new telegram__WEBPACK_IMPORTED_MODULE_1__.TelegramClient(session, apiId, apiHash, {
            connectionRetries: 5
        });
        await client.connect();
        // Send code
        const result = await client.sendCode({
            apiId,
            apiHash
        }, phoneNumber);
        await client.disconnect();
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            success: true,
            phoneCodeHash: result.phoneCodeHash
        });
    } catch (error) {
        console.error("Error requesting code:", error);
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            error: error instanceof Error ? error.message : "Failed to request verification code"
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
var __webpack_exports__ = __webpack_require__.X(0, [769], () => (__webpack_exec__(5994)));
module.exports = __webpack_exports__;

})();