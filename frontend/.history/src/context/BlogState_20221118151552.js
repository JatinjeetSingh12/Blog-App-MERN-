import React from 'react'
import BlogContext from './BlogContext'
import { useState } from 'react';


const BlogState = (props) => {
    const blogsInitial = [];
    const [blogs, setBlogs] = useState(blogsInitial);
    const ALLblogsInitial = [];
    const [ALLblogs, ALLsetBlogs] = useState(ALLblogsInitial);





    const [alert, setalert] = useState(null);
    const showAlert = (message) => {
        setalert({
            msg: message,
        })
        setTimeout(() => {
            setalert(null);
        }, 1000);
    }



    // add blog
    const addBlog = async (title, description, image) => {
        const response = await fetch('http://localhost:5000/blog/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title, description, image })
        });
        const json = await response.json();
        setBlogs(blogs.concat(json));
        showAlert("Blog added")
    }



    // fetch user blogs
    const getBlogs = async () => {
        const response = await fetch('http://localhost:5000/blog/fetch', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        setBlogs(json);
    }


    // fetch all blogs
    const getAllblogs = async () => {
        const response = await fetch('http://localhost:5000/blog/fetchAll', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        ALLsetBlogs(json);

    }






    //edit blogs
    const editBlog = async (id, title, description, image) => {
        const response = await fetch(`http://localhost:5000/blog/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title, description, image })
        });
        const eblogs = JSON.parse(JSON.stringify(blogs));
        // update
        for (let i = 0; i < blogs.length; i++) {
            const element = eblogs[i];
            if (element._id == id) {
                element.title = title;
                element.description = description;
                element.image = image;
            }
        }
        setBlogs(eblogs);
        showAlert("Blog edited successfully")
    }
    

    
    // delete blog
    const deleteBlog = async (id) => {
        const response = await fetch(`http://localhost:5000/blog/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        const newBlogs = blogs.filter((blog) => { return blog._id !== id });
        setBlogs(newBlogs);
        showAlert("Blog deleted successfully")
    }

    return (
        <>
            <BlogContext.Provider value={{alert,set blogs, getBlogs, getAllblogs, ALLblogs, addBlog, getBlogs, deleteBlog, editBlog }}>
                {props.children}
            </BlogContext.Provider>
        </>
    )
}

export default BlogState
