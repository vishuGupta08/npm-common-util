// Import the Redis client from the connections module
const RedisClient = require('./connections').redisClient();
const jwt = require('jsonwebtoken');
const ERROR_CODES = require('./errorCodes')
const {REDIS_KEYS} = require('./constants');
const Response  = require('./response')
const {CustomError} = require('./errorHandler')
const ERROR_MESSAGES = require('./errorMessages')
/**
 * Authenticates a JWT token and returns the decoded payload.
 *
 * @param {string} token - The JWT token to authenticate.
 * @returns {object} - The decoded JWT payload if the token is valid.
 * @throws {string} - Throws an error if authentication fails.
 */
const validateToken = (token) => {
    // Check if the Authorization token is present
    if (!token) {
        throw new CustomError(
            ERROR_MESSAGES[ERROR_CODES.TOKEN.MISSING],
            ERROR_CODES.TOKEN.MISSING);
    }
    return _verifyToken(token);
}

/**
 * Get the tenant ID from a JWT token's payload.
 *
 * @param {string} token - The JWT token containing user information.
 * @returns {string} - The extracted tenant ID from the JWT token's payload.
 */
const getTenantId = async (token) => {
    const parts = token?.split?.('.');
    const bufferObj = Buffer.from(parts[1], 'base64');
    const payloadObj = JSON.parse(bufferObj.toString());
    return payloadObj?.tenantId;
}

/**
 * Verifies the JWT token using a public key stored in Redis.
 *
 * @param {string} accessToken - The JWT token to verify.
 * @returns {object} - The decoded JWT payload if verification is successful.
 * @throws {string} - Throws an error if verification fails.
 */
let _verifyToken = async (accessToken) => {
    try {
        const result =  await getPublicKeyFromRedis(accessToken);
        const publicKey = '-----BEGIN PUBLIC KEY-----\n' + result.publicKey + '\n' + '-----END PUBLIC KEY-----';
        let decoded = jwt.verify(accessToken, publicKey);
        let userObj = {}
        if(decoded){
             userObj = {
                name: decoded?.name,
                email: decoded?.email,
                tenantId: decoded?.tenantId,
                customerId: decoded?.customerId
        }
        } else {
            throw new CustomError(
                ERROR_MESSAGES[ERROR_CODES.TOKEN.VERIFICATION_FAILED],
                ERROR_CODES.TOKEN.VERIFICATION_FAILED);

        }
        return Response.success(userObj);
    } catch (error) {
        return Response.error(error.message, error.code)
       
    }
};

const getPublicKeyFromRedis = async(accessToken) => {
    if (!RedisClient.isOpen) {
        await RedisClient.connect().then(() => console.log('Redis Connected'));
    }
    await RedisClient.SELECT(0);
    const tenantId = await getTenantId(accessToken);
    if(!tenantId) throw new CustomError(
        ERROR_MESSAGES[ERROR_CODES.INFORMATION.TENANT_ID_MISSING],
        ERROR_CODES.INFORMATION.TENANT_ID_MISSING);

    const tenantList = await RedisClient.SMEMBERS(`${REDIS_KEYS.KEYCLOAK_JWT_KEYS}:${REDIS_KEYS.TENANT_ID}:${tenantId}`);
    if (!tenantList?.length) {
        throw new CustomError(
            ERROR_MESSAGES[ERROR_CODES.INFORMATION.TENANT_CLOCKKEY_MISSING],
            ERROR_CODES.INFORMATION.TENANT_CLOCKKEY_MISSING);
    }
   return await RedisClient.HGETALL(`${REDIS_KEYS.KEYCLOAK_JWT_KEYS}:${tenantList?.[0]}`);
}

module.exports = {
    /**
     * Authenticates a JWT token and returns the decoded payload.
     *
     * @param {string} token - The JWT token to authenticate.
     * @param {string} type - The type of authentication (if applicable).
     * @returns {object} - The decoded JWT payload if the token is valid.
     * @throws {string} - Throws an error if authentication fails.
     */
    validateToken: (token, type) => validateToken(token)
}
