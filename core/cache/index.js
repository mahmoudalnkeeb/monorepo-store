const ioredis = require('ioredis');
const { env } = require('core/configs');

function createClient() {
  const redis = new ioredis.Redis(env.redis);

  if (env.NODE_ENV === 'development') {
    redis.on('error', (err) => {
      console.error('Redis error:', err);
    });
    redis.on('connect', () => {
      console.log('Redis connected');
    });

    redis.on('ready', () => {
      console.log('Redis ready');
    });
  }

  redis.on('error', (err) => {
    console.error('Redis error:', err);
    process.exit(1);
  });

  return redis;
}

module.exports = {
  createClient,
};
