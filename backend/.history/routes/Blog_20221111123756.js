const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogmodal');
const fetchUser = require('../middleware/decodeJWT');
const { body, validationResult } = require('express-validator');

//add note

router.post('/addnote',fetchUser,[
    body('Title', 'title length must be atleast 3').isLength({ min: 3 }),
    body('Description', 'Enter a valid ').isEmail(),
],(req,res)=>{})

module.exports = router