var db = require('../config');
var Pmsg = require('../models/postmessage');

var Pmsgs = new db.Collection();

Pmsgs.model = Pmsg;

module.exports = Pmsgs;