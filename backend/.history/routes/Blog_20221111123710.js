const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogmodal');
const fetchUser = require('../middleware/decodeJWT');
const { body, validationResult } = require('express-validator');

//add note

router.post('/addnote',fetchUser,[
    body('title', 'Enter a valid name').isLength({ min: 3 }),
    body('Description', 'Enter a valid email ').isEmail(),
],(req,res)=>{})

module.exports = router