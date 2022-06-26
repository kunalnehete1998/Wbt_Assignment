const mysql = require('mysql2');

let dbobject = {
    host: 'localhost',
    user: 'kunal',
    password: '12345',
    database: 'jalgaonriders',
    port: 3306
}

const connection = mysql.createConnection(dbobject);

console.log("Connection Successful!!");