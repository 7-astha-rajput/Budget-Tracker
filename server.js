const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Create table for expenses
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        amount REAL,
        description TEXT,
        date TEXT
    )`);
});

// Get all expenses
app.get('/api/expenses', (req, res) => {
    db.all('SELECT * FROM expenses', (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(rows);
        }
    });
});

// Add a new expense
app.post('/api/expenses', (req, res) => {
    const { type, amount, description, date } = req.body;
    db.run(`INSERT INTO expenses (type, amount, description, date) VALUES (?, ?, ?, ?)`,
        [type, amount, description, date], function(err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send({ id: this.lastID });
            }
        });
});

// Delete an expense
app.delete('/api/expenses/:id', (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM expenses WHERE id = ?`, id, function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send();
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
