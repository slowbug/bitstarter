var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var inFile = "index.html"
var inTxt = fs.readFileSync(inFile, 'utf-8');

app.get('/', function(request, response) {
  response.send(inTxt);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
