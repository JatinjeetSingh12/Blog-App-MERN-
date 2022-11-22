const express = require('express')
const app = express()

// create user
app.post('/',[] (req, res) => {
  res.send('hello world')
})