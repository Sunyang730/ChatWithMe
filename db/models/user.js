var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Pmsg = require('./postmessage');
var Rmsg = require('./replymessage');

var User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,
  defaults: {
    po_coin: 6
  },

  pmsg: function(){
    return this.hasMany(Pmsg);
  },

  rmsg: function(){
    return this.hasMany(Rmsg);
  }


});

module.exports = User;