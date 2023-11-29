// addevent.js

// Import required modules
const mysql = require('mysql');  

// Database connection config
const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'bueh',
  port: 3306
});

// Get reference to form
const form = document.getElementById('eventForm');

// Submit event handler
function submitEvent(e) {

  // Prevent default form submit
  e.preventDefault();

  // Get form values
  const name = form.elements['name'].value;
  const description = form.elements['description'].value;
  const start_date = form.elements['start_date'].value;

  // SQL query
  const sql = "INSERT INTO buevents (name, description, start_date) VALUES (?, ?, ?)";

  // Execute query
  db.query(sql, [name, description, start_date], (err, result) => {
    if (err) {
      // Handle error
    } else {
      // Handle success  
    }
  });

}

// Attach submit event to form
form.addEventListener('submit', submitEvent);
