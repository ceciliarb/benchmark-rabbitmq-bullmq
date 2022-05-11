const express = require('express')
const bullmqProducer = require('../bullmq/bullmq-producer')
const rabbitmqProducer = require('../rabbitmq/rabbitmq-producer')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/bullmq', (req, res) => {
    bullmqProducer.insert();
    res.send('ok bullmq!')
})
app.post('/rabbitmq', (req, res) => {
    rabbitmqProducer.insert();
    res.send('ok rabbitmq!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

process.on('SIGINT', function (code) {
    process.exit(code);
});