
import express from 'express';
import fs from 'fs';
import { createServer } from 'https';
import { join } from 'path';

var app = express();


app.use(express.static(join(__dirname, './public')))

// Certificate
const privateKey = fs.readFileSync('/certs/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/certs/cert.pem', 'utf8');
const ca = fs.readFileSync('/certs/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
createServer(credentials, app).listen(3000, function () {
    console.log('Example app listening on port 3000! Go to https://localhost:3000')
})




