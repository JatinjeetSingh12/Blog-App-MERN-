import React from 'react'
import Blogcontext from './blogcontext';


const BlogState = (props) => {

    const 
  return (
    <>
    <Blogcontext.provider>
        {props.children}
    </Blogcontext.provider>
      
    </>
  )
}

export default BlogState
