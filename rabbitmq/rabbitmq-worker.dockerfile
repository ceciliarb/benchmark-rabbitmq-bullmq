FROM node:16-slim

WORKDIR /usr/src

COPY ./node_modules ./node_modules
COPY ./rabbitmq/rabbitmq-worker.js .

CMD ["node", "./rabbitmq-worker.js"]