const express = require('express');
const router = express.Router();
const User = require('../models/Usermodal');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/decodeJWT')







const JWT_secret = "Jatin#12";


// create user
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email ').isEmail(),
    body('password', 'Enter a valid password ').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(500).json({ error: "duplicate email" });
        }

        let salt = await bcrypt.genSalt(10);
        let secpass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass
        })

        let data = {
            user: {
                id: user.id
            }
        }
        var token = jwt.sign(data, JWT_secret);
        success = true;
        res.json({ success, token });
    }

    catch (error) {
        return res.status(500).send("some error occured");
    }
});




// login user
router.post('/login', [
    body('email', 'Enter a valid email ').isEmail(),
    body('password', 'Enter a valid password ').exists(),
], async (req, res) => {
    let success = false;

    //destructing
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "please try to login with correct credintials" });
        }
        let passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "please try to login with correct credintials" });
        }
        let data = {
            user: {
                id: user.id
            }
        }
        var token = jwt.sign(data, JWT_secret);
        success = true;
        res.json({ success, token });

    } catch (error) {
        return res.status(500).send("some error occured");
    }
});


//get user

router.get('/getuser',fetchUser,(req,re)=>{

})



module.exports = router