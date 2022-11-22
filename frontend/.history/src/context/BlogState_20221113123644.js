import React from 'react'
import BlogContext from './BlogContext';


const BlogState = (props) => {

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

    const addBlog = async (title,description,image)=>{
        const response = await fetch('http://localhost:5000/blog/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.st
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json)
    }
    
    return (
        <>
            <BlogContext.Provider value={{ Loginuser, CreateUser,addBlog }}>
                {props.children}
            </BlogContext.Provider>

        </>
    )
}

export default BlogState
