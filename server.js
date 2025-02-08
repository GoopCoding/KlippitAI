const express = require('express');
const app = express();
const config = require('./config');
const chatRoutes = require('./routes/chatRoutes');
const logger = require('./logs/logger');
app.use(express.json());
app.use(express.static('public'));
app.use('/api/chat', chatRoutes);
app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
});
