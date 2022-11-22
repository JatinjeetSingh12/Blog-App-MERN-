const express = require('express')
const app = express()

// create user
app.post('/',[], (req, res) => {
  res.send('hello world')
});

// get user
app.get('/',[], (req, res) => {
  res.send('hello world')
});



// login user
app.post('/',[], (req, res) => {
  res.send('hello world')
});