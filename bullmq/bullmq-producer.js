const bullmq = require('bullmq')
require('dotenv').config();

const REDIS_SERVER = process.env.REDIS_SERVER || "localhost";
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const insert = async () => {
    const queue = new bullmq.Queue('bullmq', {
        connection: {
            host: REDIS_SERVER,
            port: REDIS_PORT
        }
    });
    await queue.add('benchmark', { foo: 'bar' });
    queue.close()
}

module.exports = { insert }