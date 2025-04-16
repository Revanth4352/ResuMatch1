const mysql = require('mysql2');
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "krishnasurya",
    database: "test",
    connectionLimit: 10
});

pool.query(`SELECT * FROM registration`, (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    console.log(result);
});