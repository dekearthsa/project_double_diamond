FROM node:17.8-alpine

RUN apk add --no-cache tini && mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install && npm cache clean --force
# RUN npm install face-api.js@0.22.2
# COPY . .

EXPOSE 5172

CMD ["npm", "run", "dev"]