const mysql = require('mysql');

// Konfigurasi koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Sesuaikan dengan password database MySQL Anda
    database: 'ygentertaiment' // Nama database
});

// Cek koneksi
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

module.exports = db;
