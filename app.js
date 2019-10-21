const express = require('express');
const app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/accounts');

app.set("view engine", "pug");

app.get("/",  (req, res) => {

});

app.get("/login", (req, res) => {
    res.render('login')
});


app.get("/register", (req, res) => {
    res.render('register')
});





app.listen(3000)


