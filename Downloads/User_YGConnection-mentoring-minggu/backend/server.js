const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt');

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password:'',
    database:'ygentertainment'

})

app.post('/signup', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.values.password, salt);
    const sql = "INSERT INTO login (name, email, password, phonenumber) VALUES (?)";
    const values = [
        req.body.values.name,
        req.body.values.email,
        hashedPassword,
        req.body.values.phonenumber
    ];
    
    db.query(sql, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User registered successfully");
    });
});

// Update login
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ?";
    const { email, password } = req.body;

    db.query(sql, [email], async (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length > 0) {
            const validPassword = await bcrypt.compare(password, data[0].password);
            if (validPassword) {
                return res.status(200).json({ message: "Login successful", user: data[0] });
            }
        }
        return res.status(401).json({ message: "Invalid email or password" });
    });
});

app.listen(8081,()=>{
    console.log("listening...")
})