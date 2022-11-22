const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogmodal');

//add note

router.post('/addnote',(req,res))

module.exports = router