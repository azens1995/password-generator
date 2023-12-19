const express = require('express');
const log = require('./utils/logger');

const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
  const message = 'Server is up and running';
  log.info(message);
  res.json({
    status: 200,
    message,
  });
});

app.listen(PORT, () => {
  log.info('Server has started successfully.');
  log.info(`Server is listening in port ${PORT}`);
});
