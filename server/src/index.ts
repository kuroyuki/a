
import express from 'express';

var app = express();

app.get('/', function (req:express.Request, res:express.Response) {
  res.send('Hello World!');
});

app.listen(80, function () {
  console.log('Run on 80 port');
});

