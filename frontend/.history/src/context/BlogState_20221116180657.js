import React from 'react'
import BlogContext from './BlogContext'
import { useState } from 'react';


const BlogState = (props) => {
    const blogsInitial = [];
    const [blogs, setBlogs] = useState(blogsInitial);

    


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
        console.log(json)
    }




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

    const getAllblogs = async ()=>{
        const response = await fetch('http://localhost:5000/blog/fetch',{
            method: 'GET',
            headers
        })
    }






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
    }

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
    }

    return (
        <>
            <BlogContext.Provider value={{ blogs, getBlogs,  addBlog, getBlogs, deleteBlog, editBlog }}>
                {props.children}
            </BlogContext.Provider>
        </>
    )
}

export default BlogState
