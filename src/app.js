const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgon = require('morgan');
const rateLimitMiddleware = require('./middlewares/rateLimitMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const logger = require('./utils/logger');
const userRoutes = require('./routes/userRoutes');
const webhookRoutes = require('./routes/webhookRoutes');


const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgon('combined', { stream: { write: message => logger.info(message.trim())}}));

app.use('/api/users', rateLimitMiddleware, userRoutes);
app.use('/api/webhooks', webhookRoutes);

app.use(errorMiddleware);

module.exports = app;