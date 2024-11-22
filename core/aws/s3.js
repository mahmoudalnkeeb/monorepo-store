const { S3Client } = require('@aws-sdk/client-s3');
const { fromEnv } = require('@aws-sdk/credential-provider-env');
const { env } = require('core/configs');
require('dotenv').config();

module.exports = () => {
  const s3Client = new S3Client({
    region: env.s3.region,
    credentials: fromEnv(),
  });

  return s3Client;
};
