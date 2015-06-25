var fs = require('fs');
var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', function(req, res){
  fs.readFile('./index.html', 'utf8', function(err, page){
    res.send(page)
  })
})

app.listen(80, function(){
  console.log("servering")
})