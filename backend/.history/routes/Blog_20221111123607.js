const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogmodal');
const fetchUser = require('../middleware/decodeJWT')

//add note

router.post('/addnote',fetchUser,(req,res)=>{})

module.exports = router