const express = require('express');
const expressSession = require('express-session');
const flash = require('connect-flash');
const mongoose = require('mongoose')
const path = require('path');

const app = express();

//connect to Atlas cloud MongoDB
mongoose.connect('mongodb+srv://Rashid:12345@testcluster1.gzv5rb3.mongodb.net/portfolio', { useNewUrlParser: true })

//app.use(express.static('public'));
app.use(express.static('C:\\Bootcamp\\Portfolio'));
app.use(express.json()) //body parsing middleware


const ejs = require('ejs')
app.set('view engine', 'ejs')//tell Express to use EJS 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(3000, () => {
    console.log('App listening on port 3000')
});