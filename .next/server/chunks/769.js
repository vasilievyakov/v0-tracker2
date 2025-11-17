"use strict";
exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 3062:
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

/***/ 9802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ createClient)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

function createClient() {
    return (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}


/***/ })

};
;