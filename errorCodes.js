
// one level nesting
const ERROR_CODES = {
    INTERNAL_SERVER_ERROR: 'internal.server.error',
    TOKEN: {
            MISSING: 'bff.common.secure.jwt.token.missing',
            TOKEN_EXPIRED: 'bff.common.secure.jwt.token.expired',
            INVALID: 'bff.common.secure.jwt.token.invalid',
            VERIFICATION_FAILED:'bff.common.secure.token.verification.failed'
        },
    INFORMATION: {
        TENANT_ID_MISSING: 'bff.common.secure.redis.tenant.id.missing',
        TENANT_CLOCKKEY_MISSING: 'bff.common.secure.redis.cloakKey.missing'

    }
}



// ========================== Export Module Start ==========================
module.exports = ERROR_CODES
// ========================== Export Module End ============================
