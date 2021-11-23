var mysql = require("mysql");

var con = mysql.createConnection({
  host: "sql4.freemysqlhosting.net",
  user: "sql4453466",
  password: "GJhyVFC5eG",
  database: "sql4453466"
});

con.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});
