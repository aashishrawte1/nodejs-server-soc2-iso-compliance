const mongoose = require('mongoose');
const { databaseUrl } = require('../config/config');
const logger = require('../utils/logger');

const connectDB = async () => {
    try {
        await mongoose.connect(databaseUrl);
        logger.info('Connected to database successfully')
    } catch (error) {
        logger.error('Error connecting to database' + error.message);
        process.exit(1);
    }
}

module.exports = connectDB;