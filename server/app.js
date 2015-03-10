var express = require('express');
var app = express();

app.use(express.static('client'));

app.get('/signin', function(req, res){
  res.send();
});

var port = 4568;
console.log('Listening on port :',port);
app.listen(port);