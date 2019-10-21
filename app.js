const express = require('express');
const app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/accounts');

const users = [
  {id: 1, name: 'Rawand', email: 'rawand@gmail.com', password: 'password'},
  {id: 2, name: 'Huy', email: 'huy@gmail.com', password: 'password'},
  {id: 3, name: 'Steven', email: 'steven@gmail.com', password: 'password'},
  {id: 4, name: 'Angelo', email: 'angelo@gmail.com', password: 'password'}
]

app.use(
  session({
    secret: "the new twitter",
    resave: false,
    saveUninitialized: true
  })
);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  
  res.render("index");
  const {userID} = req.session
  console.log(userID)
});

app.get("/login", (req, res) => {
  res.render('login');
  //req.session.userID
});

app.get("/account", (req, res) => {
  res.render('account');
  
});


app.get("/register", (req, res) => {
  res.render('register');
});



app.get("/register", (req, res) => {
    res.render('register');
});



app.post("/login", (req, res) => {
  res.render('login');
  
});


app.post("/register", (req, res) => {
  res.render('register');
});

app.post("/logout", (req, res) => {
  res.render('register');
});





app.listen(3000)


