import React from 'react'
import BlogContext from './blogcontext';


const BlogState = (props) => {

    const Loginuser = async (email, password) => {
        const response = await fetch('https://localhost:5000/blog/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
    }

        return (
            <>
                <BlogContext.Provider value={Loginuser}>
                    {props.children}
                </BlogContext.Provider>

            </>
        )
    }

    export default BlogState
