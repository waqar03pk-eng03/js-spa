var express = require('express');
var path = require('path');

let port = 3000;
var app = express();

app.use('/public', express.static('public'))

app.get('/', function(req, res) {
    console.log(req.url);
    let filePath = path.join(__dirname, '/public/index.html');
    res.status(200).sendFile(filePath);
});

app.listen(port, function() {
    console.log('request received');
});