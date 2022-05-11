FROM node:16-slim

COPY . .

CMD ["node", "./api.js"]