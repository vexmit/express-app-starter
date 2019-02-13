// EXRPESS
const express = require('express');
const app = express();

// PORT
const port = 3000;

// BODY-PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/app", {useNewUrlParser: true});

// STATIC FILES & EJS
app.use(express.static('public'));
app.set('view engine', 'ejs');

// SCHEMA SETUP & MODEL
const appSchema = new mongoose.Schema({
    name: String,
});

const Myapp = mongoose.model('Myapp', appSchema);

// GET INDEX.EJS
app.get('/', (req, res) => {
    res.render('index');
});


// APP LISTEN
app.listen(port, () => {
    console.log("The server has started on port: " + port);
});