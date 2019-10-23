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
  let data = {};
  console.log(">>>>>>>>>>>")
  data=db.content.findAll();
  console.log(data.posting)
  res.render("index", data);
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

app.post("/login", function(req, res) {
  db.Users.findOne({
    where:{
      email: req.body.email
    }
  }).then(function(user){
    if (!user){
      res.redirect('/')
    } else{
      bcrypt.compare(req.body.password, user.password, function(err, result){
        if (result == true){
          res.redirect('/account');
        } else{
          res.send("Invalid password");
          res.redirect('/')
        }
      });
    }
  });

});

app.post('/users', async (req, res)=>{
  bcrypt.hash(req.body.password, saltRounds, function (err, hash){
    db.Users.create({
      email: req.body.email,
      password: hash
    }).then(function(data){
      if (data){
        res.redirect('/');
      }
    });
  });
});

app.get("/logout", function(req, res) {
  req.session.destroy();
  res.redirect("/");
});
app.listen(3000)


