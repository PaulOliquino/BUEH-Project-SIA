// addevent.js

const mysql = require('mysql');

// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'BUEH',
  port: 3306
});

// Rest of event submission logic...

function submitEvent(e) {

  // Get form values  

  const sql = "INSERT INTO events SET ?";
  
  db.query(sql, data, (err) => {
    if (err) {
      console.log(err);
      return; 
    }
    
    console.log("Event added!");

  });

}
