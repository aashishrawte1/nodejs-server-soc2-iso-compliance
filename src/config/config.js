require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    rateLimitWindowMs: process.env.RATE_LIMIT_WINDOW_MS,
    rateLimitMax: process.env.RATE_LIMIT_MAX   
}