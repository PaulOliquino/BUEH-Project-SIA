// server.js
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.json());

// Connect to the bueh database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bueh',
  port: 3306,
});

// Handle POST request to submit an event
app.post('/submitEvent', (req, res) => {
  const { name /*, other form fields */ } = req.body;

  const sql = "INSERT INTO buevents (name, /* other columns */) VALUES (?, /* other placeholders */)";

  db.query(sql, [name /*, other values */], (err, result) => {
    if (err) {
      console.error('Error inserting event:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Event inserted into buevents table!');
      res.status(200).send('Event submitted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
