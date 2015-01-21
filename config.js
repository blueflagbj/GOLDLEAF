
// database settings for CouchDB
//exports.db = 'http://127.0.0.1:5984/';        // connection string for database

// or if you want to use MongoDB
 exports.db = {
   url: 'mongodb://127.0.0.1/',
   name: 'test',
   collection: 'goldleaf'  // collection name for MongoDB
 };

// PostgreSQL
// exports.db = {
//   url: 'postgres://127.0.0.1:5432/',
//   name: 'users',
//   collection: 'my_user_table'  // table name for SQL databases
// };

// MySQL
// exports.db = {
//   url: 'mysql://127.0.0.1:3306/',
//   name: 'users',
//   collection: 'my_user_table'
// };

// SQLite
// exports.db = {
//   url: 'sqlite://',
//   name: ':memory:',
//   collection: 'my_user_table'
// };

exports.emailType = 'nodemailer-smtp-transport';
exports.emailSettings = {
  service: 'Mailgun',
  auth: {
    user: 'postmaster@username.mailgun.org',
    pass: 'secret-password'
  }
};