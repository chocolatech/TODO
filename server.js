var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('app'));
app.use('/node_modules', express.static('node_modules'));

var usersFilePath = path.join(__dirname, '/api/data.json');


app.get('/list', function (req, res) {
  var readable = fs.createReadStream(usersFilePath);
  readable.pipe(res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});