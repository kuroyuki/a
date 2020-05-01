FROM node:lts-alpine AS client
WORKDIR /usr/src/app
COPY public/ package.json index.js ./
RUN npm install --production
EXPOSE 3000
CMD node index.js >> /ecurep/log/layoutcenter/app.log
