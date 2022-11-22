import React from 'react'
import 


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
                <Blogcontext.>
                    {props.children}
                </Blogcontext.>

            </>
        )
    }
}
export default BlogState
