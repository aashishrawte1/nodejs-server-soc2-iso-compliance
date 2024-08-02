const app = require('./app');
const connectDB = require('./database/database');
const { port } = require('./config/config');
const logger = require('./utils/logger');

connectDB();

app.listen(port, () => {
    logger.info(`server is running on port ${port}`);
})