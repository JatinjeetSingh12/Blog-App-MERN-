const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogmodal');
const fetchUser = require('../middleware/decodeJWT');
const { body, validationResult } = require('express-validator');

//add note

router.post('/addnote',fetchUser,[
    body('Title', 'title length must be atleast 4').isLength({ min: 4 }),
    body('Description', 'title length must be atleast 4 ').isEmail(),
],(req,res)=>{})

module.exports = router