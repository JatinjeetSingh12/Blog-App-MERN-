import React from 'react'
import Blogcontext from './blogcontext';


const BlogState = (props) => {

    const createUser = as () => {
        const response = await fetch(`${host}/api/note/fetchallnotes`, {
            method: 'GET',
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
