const express = require('express')
const app = express()
const User = req

// create user
app.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email ').isEmail(),
    body('password', 'Enter a valid password ').isLength({ min: 5 }),
], (req, res) => {

    let success = false;

    let user = 

});




// login user
app.post('/', [], (req, res) => {
    res.send('hello world')
});




    // get user
    app.get('/', [], (req, res) => {
        res.send('hello world')
    });