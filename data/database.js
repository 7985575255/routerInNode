const mysql=require('mysql2');

const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'sys',
    password: 'Av1122'
});

module.exports=pool.promise();