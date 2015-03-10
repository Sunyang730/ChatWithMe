var express = require('express');
var app = express();

var db = require('../db/config');
var User = require('../db/models/user');
var Pmsg = require('../db/models/postmessage');
var Rmsg = require('../db/models/replymessage');
var Users = require('../db/collections/users');
var Pmsgs = require('../db/collections/postmessages');
var Rmsgs = require('../db/collections/replymessages');

app.use(express.static('client'));

app.post('/api/users/signup', function(req, res){
  res.send('I like you');
});



var port = 4568;
console.log('Listening on port :',port);
app.listen(port);