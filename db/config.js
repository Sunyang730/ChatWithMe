var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'password',
    database: 'ChatWithMe',
    charset: 'utf8',
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 255);
      user.string('password', 255);
      user.integer('po_coin');
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('postmessages').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('postmessages', function (pmsg) {
      pmsg.increments('id').primary();
      pmsg.integer('user_id');
      pmsg.string('pmsg');
      pmsg.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('replymessages').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('replymessages', function (rmsg) {
      rmsg.increments('id').primary();
      rmsg.string('rmsg');
      rmsg.integer('user_id');
      rmsg.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

/************************************************************/
// Add additional schema definitions below
/************************************************************/


module.exports = db;
