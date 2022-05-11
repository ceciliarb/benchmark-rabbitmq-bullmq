const amqp = require('amqplib/callback_api');

require('dotenv').config();

const RABBITMQ_SERVER = process.env.RABBITMQ_SERVER || "localhost";
const RABBITMQ_PORT = process.env.RABBITMQ_PORT || 6379;

amqp.connect(`amqp://${RABBITMQ_SERVER}`, function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function (msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});

process.on('SIGINT', function (code) {
    process.exit(code);
});