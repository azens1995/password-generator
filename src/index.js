const express = require('express');
const log = require('./utils/logger');
const generatePassword = require('./utils/generatePassword');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const PORT = 3000;

app.get('/health', (req, res) => {
  const message = 'Server is up and running';
  log.info(message);
  res.json({
    status: 200,
    message,
  });
});

app.post('/', (req, res) => {
  const { size, hasSpecial } = req.body;
  let errorMessage = '';
  if (size) {
    if (typeof size !== 'number') {
      errorMessage = 'Please provide valid number.\n';
    }
    if (typeof size === 'number' && (size < 1 || size > 16)) {
      errorMessage += 'Size must be between 1 and 16.';
    }
  }
  if (hasSpecial && typeof hasSpecial !== 'boolean') {
    errorMessage += `hasSpecial must be boolean value.`;
  }
  if (errorMessage) {
    return res.json({ status: 400, error: errorMessage });
  }
  const message = 'Successfully generated password.';
  log.info(message);
  const password = generatePassword(size, hasSpecial);
  res.json({
    status: 200,
    message,
    data: {
      password,
    },
  });
});

app.listen(PORT, () => {
  log.info('Server has started successfully.');
  log.info(`Server is listening in port ${PORT}`);
});
