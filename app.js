const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// PORT
const port = 3000;

// MONGOOSE CONNECTION
mongoose.connect("mongodb://localhost:27017/app", {useNewUrlParser: true});

// STATIC FILES, BODY-PARSER & EJS
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// SCHEMA SETUP & MONGOOSE MODEL
const appSchema = new mongoose.Schema({
    name: String,
});

const Myapp = mongoose.model('Myapp', appSchema);

// ROUTES
app.get('/', (req, res) => {
    res.render('index');
});


// APP LISTEN
app.listen(port, () => {
    console.log("The server is working on port: " + port);
});