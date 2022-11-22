const express = require('express')
const router = express.Router();
const User = require('../models/Usermodal');

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

    user = await User.create({
        name: req.body.name,
        name: req.body.name,
        name: req.body.name,
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