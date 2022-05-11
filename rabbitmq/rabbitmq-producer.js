const amqp = require('amqplib/callback_api');

require('dotenv').config();

const RABBITMQ_SERVER = process.env.RABBITMQ_SERVER || "localhost";
const RABBITMQ_PORT = process.env.RABBITMQ_PORT || 6379;

const insert = async () => {
    amqp.connect(`amqp://${RABBITMQ_SERVER}`, function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = 'hello';
            var msg = 'Hello World!';

            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(msg));

            console.log(" [x] Sent %s", msg);
        });
        setTimeout(function () {
            connection.close();
        }, 500);
    });
}

module.exports = { insert }