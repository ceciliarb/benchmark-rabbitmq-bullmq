const bullmq = require('bullmq');
require('dotenv').config();

const REDIS_SERVER = process.env.REDIS_SERVER || "localhost";
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const connection = {
    host: REDIS_SERVER,
    port: REDIS_PORT,
}

const queueScheduler = new bullmq.QueueScheduler(`bullmq`, { connection });

const worker = new bullmq.Worker('bullmq', async job => {
    console.log(job.data);
}, {
    connection
});

worker.on('completed', job => {
    console.log(`${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
});

process.on('SIGINT', function (code) {
    process.exit(code);
});