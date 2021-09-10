const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');
const flash = require('connect-flash')
const morgan = require('morgan');
require('dotenv').config();

const port = process.env.PORT || process.env.APP_PORT;

// Routes
const userRouter = require('./api/users/user.router')
const lenderRouter = require('./api/lenders/lender.router')
const indexRouter = require('./api/index/index.router')

const app = express();

app.use(morgan('short'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(methodOverride("_method"));
app.use(flash());


// app.get('/', (req, res) => {
//     res.send("Hello from the root route!")
// }); 

// app.get('/api', (req, res) => {
//     res.send("Hello from the api route!")
// }); 

// Use routes
app.use('/', indexRouter)
app.use('/api/users/', userRouter)
app.use('/api/lender/', lenderRouter)


// listen for requests
app.listen(port, () => {
  console.log(`The server is running on port ${port}...`);
  });
