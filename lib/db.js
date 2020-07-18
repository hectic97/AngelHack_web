var mysql = require('mysql');
var db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',   
    password: '101306',
    database: 'user_profile'
});
db.connect();
module.exports = db;