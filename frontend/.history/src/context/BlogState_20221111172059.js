import React from 'react'
import Blogcontext from './blogcontext';


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
                <Blogcontext.provider value>
                    {props.children}
                </Blogcontext.provider>

            </>
        )
    }
}
export default BlogState
