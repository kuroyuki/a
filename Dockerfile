FROM node:alpine as server
WORKDIR /user/src/app
COPY server/package.json server/package-lock.json ./
RUN npm install
COPY server/ ./
RUN num run build

FROM node:alpine as client
WORKDIR /user/src/app
COPY client/package.json client/package-lock.json ./
RUN npm install
COPY client/ ./
RUN num run build

FROM node:alpine
COPY certs/ ./certs
COPY --from=server /usr/src/build /usr/src/app/package.json /usr/src/app/package-lock.json ./
COPY --from=client /usr/src/build/public ./public

RUN npm install --production

EXPOSE 3000
CMD node index.js >> /logs/app.log

