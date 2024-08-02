const rateLimit = require('express-rate-limit');
const { rateLimitWindowMs, rateLimitMax } = require('../config/config');

const limiter = rateLimit({
    windowMs: rateLimitWindowMs,
    max: rateLimitMax,
    message: 'Too many requests, please try again later.'
});

module.exports = limiter;