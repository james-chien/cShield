FROM node:latest
LABEL maintainer="James Chien"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

CMD yarn start
