import React, { useState } from 'react'
import BlogContext from './BlogContext';


const BlogState = (props) => {


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


        console.log(json);
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
        console.log(json)
    }

    const addBlog = async (title, description, image) => {
        const response = await fetch('http://localhost:5000/blog/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2Y2U4NzljYTQ3ZTk3NWRjYWNkNWQxIn0sImlhdCI6MTY2ODE1MjQxMH0.V9rYqnd9zGyCv2TkemeKS65nr67h28vdX2tbEp85sX8",
            },
            body: JSON.stringify({ title, description, image })
        });
        const json = await response.json();
        setBlogs(blogs. concat(json));
        // console.log(json)
    }

    return (
        <>
            <BlogContext.Provider value={{ Loginuser, CreateUser, addBlog }}>
                {props.children}
            </BlogContext.Provider>

        </>
    )
}

export default BlogState
