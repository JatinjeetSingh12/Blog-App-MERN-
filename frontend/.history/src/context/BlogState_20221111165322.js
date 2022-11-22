import React from 'react'
import Blogcontext from './blogcontext';


const BlogState = (props) => {

    const createUser = async () => {
        const response = await fetch('https://localhost:5000/blog/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify() 
        });

        return (
            <>
                <BlogState.
                    {props.children}

            </>
        )
    }
}
    export default BlogState
