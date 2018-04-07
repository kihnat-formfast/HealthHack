const sqlite3 = require('sqlite3').verbose();
 
// open database in file system
let db = new sqlite3.Database('../DB/healthHack.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});
 
// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});