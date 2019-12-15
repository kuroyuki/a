
import express from 'express';
import fs from 'fs';
import { createServer } from 'https';
import { join } from 'path';

var app = express();

app.use(express.static(join(__dirname, './public')))

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/yurikzhukov.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/yurikzhukov.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/yurikzhukov.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
createServer(credentials, app).listen(443, function () {
    console.log('Example app listening ! Go to https://localhost')
})




