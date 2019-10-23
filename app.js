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
function loginRedirect(req, res, next){
  console.log(',.,.,.,.,.,.,.,.,.')
  if (req.session.userId){
    console.log("<<<<<<<<<<")
    res.redirect("/account")
  }else{
    next();
  }
}
function authenticate (req, res, next){
  if (!req.session.userId){
    console.log(">>>>>>>>>>")
    res.redirect("/")
  } else{
    next();
  }
}
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render('index')
});

app.get("/login", loginRedirect, (req, res) => {
  res.render('/');
});


app.get("/account", authenticate, (req, res) => {
  res.render('account');
  
});

app.get("/register", loginRedirect, (req, res) => {
  res.render('register');
});

app.post("/login", loginRedirect, function(req, res) {
  db.Users.findOne({
    where:{
      email: req.body.email
    }
  }).then(function(user){
    if (!user){
    res.redirect('/')
    } else{
      bcrypt.compare(req.body.password, user.password, function(err, result){
        if (result){
          req.session.userId = user.id
          res.redirect('/account');
        } else{
           return res.status(500).send('Invalid username or password');
       
        }
      });
    }
  });

});
app.post('/tweets', async (req, res)=>{
  try{
      req.body.author = req.user.id;
      const tweet = new tweet(req.body);
      await tweet.save();
      res.redirect('/')
  } catch(e){
    console.log(e)
    res.send("Error please try again")
  }
})
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

app.listen(3000)


