const sqlite3 = require('sqlite3').verbose();
 
// open database in file system
let db = new sqlite3.Database('./DB/healthHack.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the Health Database database.');
});

var data = [];

db.serialize(() => {
  db.each(`SELECT Id as id,
                  Name as name
           FROM Modules`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(row.id + "\t" + row.name);
    data.push(row.name);
  });
});
console.log('test');
 
console.log(data);
 
// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
module.exports = [ {title: 'Test', author: 'Author here'}];