var express = require('express');
var multer = require('multer');
var app = express();

var upload = multer({ dest: './public/upload/'});

app.set('view engine', 'jade');

app.get('/', function (req,res) {
  res.render('index');
});

app.post('/', upload.single('photo'), function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ size: req.file.size }));
});

app.listen(3000);
console.log('Application starts on 3000: http://localhost:3000');