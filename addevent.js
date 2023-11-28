// addevent.js

const mysql = require('mysql');

// Connect to the database 
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'BUEH',
  port: 3306 
});

function submitEvent(e) {

  // Get form data
  const data = {
    name: form.name.value,
    description: form.description.value,
    start_date: form.start_date.value,
    // ...
  };

  // SQL insert statement
  const sql = "INSERT INTO events SET ?";

  // Insert form data into database
  db.query(sql, data, (err) => {
    if(err) throw err;
    console.log("Event data inserted!");
  });

}
