require('dotenv').config();

const getEnv = (key, defaultValue) => {
  if (!process.env[key] && defaultValue === undefined && process.env.NODE_ENV !== 'development') {
    throw new Error(`Environment variable ${key} is required`);
  }
  return process.env[key] || defaultValue;
};

const envConfig = Object.freeze({
  NODE_ENV: getEnv('NODE_ENV', 'production'),

  redis: {
    url: getEnv('REDIS_URL'),
    host: getEnv('REDIS_HOST', 'localhost'),
    port: parseInt(getEnv('REDIS_PORT', '6379'), 10),
    password: getEnv('REDIS_PASSWORD'),
    db: parseInt(getEnv('REDIS_DB', '0'), 10),
    user: getEnv('REDIS_USER', null),
  },

  database: {
    host: getEnv('DB_HOST', 'localhost'),
    port: parseInt(getEnv('DB_PORT', '5432'), 10),
    user: getEnv('DB_USER', 'postgres'),
    password: getEnv('DB_PASSWORD', null),
    database: getEnv('DB_NAME', 'postgres'),
    ssl: getEnv('DB_SSL', 'false') === 'true',
    max: parseInt(getEnv('DB_POOL_MAX', '10'), 10),
  },

  secrets: {
    jwtSecret: getEnv('JWT_SECRET'),
    saltRounds: parseInt(getEnv('SALT_ROUNDS', '10'), 10),
    jwtExpiration: getEnv('JWT_EXPIRATION', '1h'),
  },

  messageQueue: {
    host: getEnv('MQ_HOST', 'localhost'),
    port: parseInt(getEnv('MQ_PORT', '5672'), 10),
    protocol: getEnv('MQ_PROTOCOL', 'amqp'),
    user: getEnv('MQ_USER', 'guest'),
    password: getEnv('MQ_PASSWORD', 'guest'),
  },

  s3: {
    region: getEnv('S3_REGION', 'us-east-1'),
  },

  logging: {
    logLevel: getEnv('LOG_LEVEL', 'info'),
  },

  cors: {
    origin: getEnv('CORS_ORIGIN') === '*' ? '*' : getEnv('CORS_ORIGIN', '*').split(','),
  },
});

module.exports = envConfig;
