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

//edit blog

router.put('/edit:id', fetchUser, async (req, res) => {
    let newBlog = {};
    const { title, description, imageURL } = req.body;
    if (title) {
        newBlog.title = title;
    }
    if (description) {
        newBlog.description = description;
    }
    if (imageURL) {
        newBlog.imageURL = imageURL;
    }
    let blog = await Blog.findById(req.params.id)
        if (!blog) {
            return res.status(404).send("not found");
        }
        if (blog.user.toString() !== req.params.id) {
            return res.status(400).send("not allowed");
        }
        
})

// delete blog
router.delete('/delete:id', fetchUser, async (req, res) => {
    //find blog
    try {
        let blog = await Blog.findById(req.params.id)
        if (!blog) {
            return res.status(404).send("not found");
        }
        if (blog.user.toString() !== req.params.id) {
            return res.status(400).send("not allowed");
        }
        blog = await Blog.findByIdAndDelete(req.params.id);
        res.json({ "success": "blog has been deleted", blog: blog });

    } catch (error) {
        return res.status(500).send("some error occured");
    }
})



module.exports = router