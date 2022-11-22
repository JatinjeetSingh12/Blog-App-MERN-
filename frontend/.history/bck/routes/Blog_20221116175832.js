const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogmodal');
const fetchUser = require('../middleware/decodeJWT');
const { body, validationResult } = require('express-validator');




//add blog
router.post('/add', fetchUser, [
    body('title', 'title length must be atleast 3').isLength({ min: 3 }),
    body('description', 'description length must be atleast 5 ').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, image } = req.body;
    try {
        const blog = new Blog({
            title, description, image, user: req.user.id
        })

        const savedBlog = await blog.save();
        res.json(savedBlog);

    } catch (error) {
        console.log(error.message);
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

router.get('/fetchAll',async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
})



//edit blog
router.put('/edit/:id', fetchUser, async (req, res) => {
    try {
        let newBlog = {};
        const { title, description, image } = req.body;
        if (title) {
            newBlog.title = title;
        }
        if (description) {
            newBlog.description = description;
        }
        if (image) {
            newBlog.image = image;
        }
        let blog = await Blog.findById(req.params.id)
        if (!blog) {
            return res.status(404).send("not found");
        }
        if (blog.user.toString() !== req.user.id) {
            return res.status(400).send("not allowed");
        }
        blog = await Blog.findByIdAndUpdate(req.params.id, { $set: newBlog }, { new: true });
        res.json({ blog });
    }
    catch (error) {
        return res.status(500).send("some error occured");
    }

})




// delete blog
router.delete('/delete/:id', fetchUser, async (req, res) => {
    //find blog
    try {
        let blog = await Blog.findById(req.params.id)
        if (!blog) {
            return res.status(404).send("not found");
        }
        if (blog.user.toString() !== req.user.id) {
            return res.status(400).send("not allowed");
        }
        blog = await Blog.findByIdAndDelete(req.params.id);
        res.json({ "success": "blog has been deleted", blog: blog });

    } catch (error) {
        
        return res.status(500).send({error:"some error occured",mgs:error.message});
    }
})


module.exports = router