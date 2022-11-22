const express = require('express')
const router = express.Router();
const User = require('../models/Usermodal');
const bcrypt = require('bcryptjs');

// create user
router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email ').isEmail(),
    body('password', 'Enter a valid password ').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;

    
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(500).json({ error: "duplicate email" });
    }

    let salt = await bcrypt.genSalt(10);
    let secpass = 

    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
});




// login user
router.post('/', [], (req, res) => {
    res.send('hello world')
});




// get user
router.get('/', [], (req, res) => {
    res.send('hello world')
});