var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '101306',
    database: 'prac'
});

connection.connect();

connection.query('SELECT * FROM topic',function(error,results,fileds){
    if (error){
        console.log(error);
    }
    console.log(results);
});

connection.end();