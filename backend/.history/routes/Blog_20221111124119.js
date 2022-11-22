const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogmodal');
const fetchUser = require('../middleware/decodeJWT');
const { body, validationResult } = require('express-validator');

//add note

router.post('/addnote', fetchUser, [
    body('Title', 'title length must be atleast 3').isLength({ min: 3 }),
    body('Description', 'description length must be atleast 5 ').isLength({ min: 5 }),
    body('imageURL','imageURL must be valid URL')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {title,desc}
    
})

module.exports = router