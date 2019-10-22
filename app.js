const express = require('express');
const app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/accounts');

const PORT = process.env.port || 3000;

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
  res.render('index')
});

app.get("/login", (req, res) => {
  res.render('login');
});

app.post('/login'), (req, res) => {
  req.body.email = activeUSer
  req.body.password = pass

  req.session.user = activeUser
  console.log(`The email ${req.body.email} is active`)
  res.render('/account')
};


app.get("/account", (req, res) => {
  res.render('account');
  
});


app.get("/register", (req, res) => {
  res.render('register');
});

app.post("/users", (req, res)=>{
  // Once user is registered redirect user back to login page with message saying user registered successfully
  res.render('index')
});

app.post("/login", function(req, res) {
  console.log(req.body);
  res.redirect("/login");
});




app.listen(PORT, console.log('Server is running'));


