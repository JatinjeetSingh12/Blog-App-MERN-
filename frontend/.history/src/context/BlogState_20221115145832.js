import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import BlogContext from './BlogContext';


const BlogState = (props) => {

    // const navigate = useNavigate();


    const blogsInitial = [];
    const [blogs, setBlogs] = useState(blogsInitial);

    const Loginuser = async (email, password) => {
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.token);
            // navigate('/');
        }
    }

    const CreateUser = async (name, email, password) => {
        const response = await fetch('http://localhost:5000/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.token);
            navigate('/');
        }
    }

    const addBlog = async (title, description, image) => {
        const response = await fetch('http://localhost:5000/blog/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2Y2U4NzljYTQ3ZTk3NWRjYWNkNWQxIn0sImlhdCI6MTY2ODE1MjQxMH0.V9rYqnd9zGyCv2TkemeKS65nr67h28vdX2tbEp85sX8",
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2Y2U4NzljYTQ3ZTk3NWRjYWNkNWQxIn0sImlhdCI6MTY2ODE1MjQxMH0.V9rYqnd9zGyCv2TkemeKS65nr67h28vdX2tbEp85sX8",
            },
        });
        const json = await response.json();
        setBlogs(json);
    }

    const editBlog = async (id, title, description, image) => {
        const response = await fetch(`http://localhost:5000/blog/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2Y2U4NzljYTQ3ZTk3NWRjYWNkNWQxIn0sImlhdCI6MTY2ODE1MjQxMH0.V9rYqnd9zGyCv2TkemeKS65nr67h28vdX2tbEp85sX8",
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2Y2U4NzljYTQ3ZTk3NWRjYWNkNWQxIn0sImlhdCI6MTY2ODE1MjQxMH0.V9rYqnd9zGyCv2TkemeKS65nr67h28vdX2tbEp85sX8",
            },
        });
        const json = await response.json();
        const newBlogs = blogs.filter((blog) => { return blog._id !== id });
        setBlogs(newBlogs);
    }

    return (
        <>
            <BlogContext.Provider value={{ blogs, getBlogs, Loginuser, CreateUser, addBlog, getBlogs, deleteBlog, editBlog }}>
                {props.children}
            </BlogContext.Provider>

        </>
    )
}

export default BlogState
