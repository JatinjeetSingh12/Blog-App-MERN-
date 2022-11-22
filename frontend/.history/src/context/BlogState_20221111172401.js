import React from 'react'
import BlogContext from './blogcontext';


const BlogState = (props) => {

    const Login = async () => {
        const response = await fetch('https://localhost:5000/blog/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify()
        });

        return (
            <>
                <BlogContext.Provider value={}>
                    {props.children}
                </BlogContext.Provider>

            </>
        )
    }
}
export default BlogState
