const express = require('express');
const mysql = require('mysql')
require('dotenv').config();

// Routes
const userRouter = require('./api/users/user.router')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from the root route!")
}); 

app.get('/api', (req, res) => {
    res.send("Hello from the api route!")
}); 

// Use routes
app.use('/api/users/', userRouter)

// listen for requests
app.listen(process.env.APP_PORT, () => {
    console.log("The server is running on port: ", process.env.APP_PORT);
  });