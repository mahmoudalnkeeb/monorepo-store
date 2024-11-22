const dotenv = require('dotenv');
dotenv.config();

const getEnv = (key, defaultValue) => {
  if (!process.env[key] && defaultValue === undefined && process.env.NODE_ENV !== 'development') {
    throw new Error(`Environment variable ${key} is required`);
  }
  return process.env[key] || defaultValue;
};

const envConfig = Object.freeze({
  apiVersion: getEnv('API_VERSION', 'v1'),
  appName: getEnv('APP_NAME', 'products'),
  app: {
    port: parseInt(getEnv('PORT', '3000'), 10),
  },
});

module.exports = envConfig;
