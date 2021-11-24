const express = require("express");
//creating app
const app = express();

var mysql = require("mysql");

// using JSON and URL Encoded middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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
//handling static HTML and EJS templates
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index"); //no need for ejs extension
});

//send the index.html when receiving HTTP GET /
app.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

//route for contacts
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

//route for contacts
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/catalog", (req, res) => {
  res.render("catalog");
});

app.get("/register", (req, res) => {
  res.render("register");
});

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});

//pass requests to the router middleware
const router = require("./routes/apis.js");
app.use(router);
