
#nodejs 14.18.0 - LTS version
FROM node:14.18.0-bullseye

RUN apt-get update && npm install -g npm@latest
