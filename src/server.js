require('./db')
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/users')
const products = require('./routes/products')
const orders = require('./routes/orders')

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Port Config
const port = require('../config/keys').PORT;

//app.use(express.json())

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('../config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/products', products);
app.use('/api/orders', orders);

app.listen(port, () => {
    console.log('App listening to port : ', port)
})