import React from 'react'
import Blogcontext from './blogcontext';


const BlogState = (props) => {

    const createUser = async () => {
        const response = await fetch('https://localhost:5000/blog/fetchallnotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        });

        return (
            <>
                <Blogcontext.provider>
                    {props.children}
                </Blogcontext.provider>

            </>
        )
    }
}
    export default BlogState
