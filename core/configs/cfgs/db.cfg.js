const envConfig = require('./env/env.cfg');
const { Pool } = require('pg');

module.exports = () => {
  const pool = new Pool(envConfig.database);

  if (envConfig.NODE_ENV === 'development') {
    pool.on('error', (err) => {
      console.error('Postgres error:', err);
    });
    pool.on('connect', () => {
      console.log('Postgres connected');
    });

    pool.on('acquire', () => {
      console.log('Postgres acquired');
    });

    pool.on('release', () => {
      console.log('Postgres released');
    });
  }

  pool.on('error', (err, _) => {
    console.error('Unexpected error on idle client', err);
    process.exit(1);
  });

  return pool;
};
