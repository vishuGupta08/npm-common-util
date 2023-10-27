const ERROR_CODES = require('./errorCodes')
module.exports = {
    [ERROR_CODES.TOKEN.MISSING]: "JWT Token is missing!",
    [ERROR_CODES.INFORMATION.TENANT_ID_MISSING]: "Tenant ID not found.",
    [ERROR_CODES.INFORMATION.TENANT_CLOCKKEY_MISSING]: "Tenant CloakKey not found.",
    [ERROR_CODES.TOKEN.VERIFICATION_FAILED]:"Token verification failed",
}