import React from 'react'
import Blogcontext from './blogcontext';


const BlogState = (props) => {

    const createUser = async () => {
       
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
