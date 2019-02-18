var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "root",
  database: "burgers_db"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
