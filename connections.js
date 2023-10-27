


const redis = require('redis');

require('dotenv').config();

let redisClient = () => {
    let redisConnectionString = '';
 
 
    redisConnectionString = `rediss://${process.env.REDIS_DB_USER}:${process.env.REDIS_DB_PASSWORD}@${process.env.REDIS_DB_URL}`;
    
    const client = redis.createClient({ url: redisConnectionString })
    client.on('error', err => console.log('Redis Server Error::', err))
    return client
}

// ========================== Export Module Start ==========================
module.exports = {  redisClient };
// ========================== Export Module End ============================


