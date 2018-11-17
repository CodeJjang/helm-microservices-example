FROM node:10.10-alpine
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT node index.js