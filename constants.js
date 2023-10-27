

const LOCALES = {
    EN: 'en'
}

const REDIS_KEYS= {
    KEYCLOAK_JWT_KEYS: 'KeycloakJwtKeys',
    TENANT_ID: 'tenantId'
}

const ENVIRONMENT = {
    LOCAL: 'local'
};


// ========================== Export Module Start ==========================
module.exports = Object.freeze({
    REDIS_KEYS,
    LOCALES,
    ENVIRONMENT,
   
});
// ========================== Export Module End ============================