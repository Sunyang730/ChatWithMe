var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = require('../db/config');
var User = require('../db/models/user');
var Pmsg = require('../db/models/postmessage');
var Rmsg = require('../db/models/replymessage');
var Users = require('../db/collections/users');
var Pmsgs = require('../db/collections/postmessages');
var Rmsgs = require('../db/collections/replymessages');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//Post request for sign in
app.post('/api/users/signin', function(req, res){
  new User({'username': req.body.email}).fetch().then(function(found){
      if(found){
        res.send(200, found);
      } else {
        res.send(404, "User doesn't exist");
      }
    });
});
//Post request for new user sign up
app.post('/api/users/signup', function(req, res){
  new User({'username': req.body.email}).fetch().then(function(found){
    if(found){
      res.send(409, "User exist");
    } else {
      var user = new User({
        'username': req.body.email,
        'password': req.body.password,
      });
      user.save().then(function(newUser){
        Users.add(newUser);
        res.send(201, newUser);
      });      
    }
  });
});

//POST request for messages
app.post('/api/msg/post', function(req, res){
  var pmsg = new Pmsg({
    'user_id' :req.body.userid,
    'pmsg' : req.body.msg
  });
  pmsg.save().then(function(newMsg){
    Pmsgs.add(newMsg);
    res.send(201, 'Message posted');
  });
});




var port = 4568;
console.log('Listening on port :',port);
app.listen(port);