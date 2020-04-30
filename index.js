let express = require('express'),
	path = require('express'),
    http = require('http');

const app = express();   

app.use(express.static('public'));

http.createServer(app).listen(32100, ()=>{
	console.log("started server");	
});