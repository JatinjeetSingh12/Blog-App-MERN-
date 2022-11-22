const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogmodal');
const fetchUser = require('../middleware/decodeJWT');
const { body, validationResult } = require('express-validator');

//add blog
router.post('/add', fetchUser, [
    body('title', 'title length must be atleast 3').isLength({ min: 3 }),
    body('description', 'description length must be atleast 5 ').isLength({ min: 5 }),
    body('imageURL', 'imageURL must be valid URL')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, imageURL } = req.body;
    try {
        const blog = new Blog({
            title, description, imageURL, user: req.user.id
        })

        const savedBlog = await blog.save();
        res.json(savedBlog);

    } catch (error) {
        return res.status(500).send("some error occured");
    }

})

//fetch blogs
router.get('/fetch', fetchUser, async (req, res) => {
    try {
        let blogs = await Blog.find({ user: req.user.id });
        res.json(blogs);
    } catch (error) {
        return res.status(500).send("some error occured");
    }
})

// delete blog
router.delete('/delete:id',fetchUser, async(req,res)=>{
    //find blog
    let blog = await Blog.findById({req.param.id)
})



module.exports = router