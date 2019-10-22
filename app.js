const Sequelize =require ('sequelize');
const express = require('express');
const app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/accounts');
const saltRounds = 10;
const db = require('./models')
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
  res.render('index');
});

app.post('/login'), (req, res) => {
  req.body.email = activeUSer
  req.body.password = pass

  req.session.user = activeUser
  res.render('/account')
}


app.get("/account", (req, res) => {
  res.render('account');
  
});


app.get("/register", (req, res) => {
  res.render('register');
});

// app.post("/users", (req, res)=>{
//   // Once user is registered redirect user back to login page with message saying user registered successfully
//   res.render('index')
// });

app.post("/login", function(req, res) {
  console.log(req.body);
  res.redirect("/login");
});

app.post('/users', function (req, res) {
  console.log("does this even run?")
  db.Users.create({
    email: req.body.email,
    password: req.body.password
  }).then(function (users){;
    if(users){
      console.log("i guess it worked?")
      Response.send(users);
    }else{
      console.log("there was an issue")
      Response.status(400).send('Error in insert new record');
    }
});
});

app.listen(3000)


