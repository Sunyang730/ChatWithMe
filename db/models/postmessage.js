var db = require('../config');
var Rmsg = require('./replymessage');
var crypto = require('crypto');
var User = require('./user');

var pmsg = db.Model.extend({
  tableName: 'postmessages',
  hasTimestamps: true,
  
  user: function() {
    return this.belongsTo(User, 'user_id');
  },
  rmsg: function() {
    return this.hasOne(Rmsg);
  }
  
});

module.exports = pmsg;
