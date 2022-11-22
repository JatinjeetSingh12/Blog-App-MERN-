import React from 'react'
import Blogcontext from './blogcontext';


const BlogState = (props) => {

    const createUser = () => {
        const response })
    return (
        <>
            <Blogcontext.provider>
                {props.children}
            </Blogcontext.provider>

        </>
    )
}

export default BlogState
