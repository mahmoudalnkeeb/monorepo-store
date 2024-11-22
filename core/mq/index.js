const amqp = require('amqplib');
const { env } = require('../configs');

async function createConnection() {
  try {
    const connection = await amqp.connect(env.messageQueue);
    return connection;
  } catch (error) {
    console.error('Error connecting to message queue:', error);
    process.exit(1);
  }
}

module.exports = {
  createConnection,
};
