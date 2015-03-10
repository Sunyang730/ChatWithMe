var db = require('../config');
var Rmsg = require('../models/postmessage');

var Rmsgs = new db.Collection();

Rmsgs.model = Rmsg;

module.exports = Rmsgs;