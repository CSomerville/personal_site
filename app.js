var fs = require('fs');
var express = require('express');
var morgan = require('morgan');

var app = express();
app.set('port', (process.env.NODE_ENV === 'production')? 80 : 3000);

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', function(req, res){
  fs.createReadStream('./index.html')
    .pipe(res);
})

app.listen(app.get('port'), function(){
  console.log("servering on port " + app.get('port'));
})