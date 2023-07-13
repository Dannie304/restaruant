const mysql = require('mysql2');

// Create a connection pool to your MySQL database
const pool = mysql.createPool({
    host: '3306',
    user: 'root',
    password: 'Dannie205',
    database: 'restaurant_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
