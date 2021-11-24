const express = require("express");
//creating app
const app = express();

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
//send an HTTP response when receiving HTTP GET /
//handling static HTML and EJS templates
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index"); //no need for ejs extension
});

//route for contacts
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

//route for contacts
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  res.render("index");
});

// app.post("/auth", function (req, res) {
//   var username = app.body.username;
//   var password = app.body.password;
//   con.query(
//     "INSERT INTO account (username, password) VALUES (?,?)",
//     [username, password],
//     function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     }
//   );
// });

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});

//handling static HTML and EJS templates
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index"); //no need for ejs extension
});
