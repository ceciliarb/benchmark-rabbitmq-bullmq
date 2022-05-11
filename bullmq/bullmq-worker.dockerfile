FROM node:16-slim

WORKDIR /usr/src

COPY ./node_modules ./node_modules
COPY ./bullmq/bullmq-worker.js .

CMD ["node", "./bullmq-worker.js"]