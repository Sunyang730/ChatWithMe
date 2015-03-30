var db = require('../config');
var Pmsg = require('./postmessage');
var crypto = require('crypto');
var User = require('./user');

var Rmsg = db.Model.extend({
  tableName: 'replymessages',
  hasTimestamps: true,
  
  user: function() {
    return this.belongsTo(User, 'user_id');
  },
  pmsg: function() {
    return this.hasOne(Pmsg);
  }
  
});

module.exports = Rmsg;
