FROM node:latest

WORKDIR /scr

ADD package.json package-lock.json ./

RUN npm install

ADD . . 

