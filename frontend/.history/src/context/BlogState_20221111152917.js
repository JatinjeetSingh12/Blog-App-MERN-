import React from 'react'
import Blogcontext from './blogcontext';


const BlogState = (props) => {
  return (
    <>
    <Blogcontext.provider v>
        {props.children}
    </Blogcontext.provider>
      
    </>
  )
}

export default BlogState
