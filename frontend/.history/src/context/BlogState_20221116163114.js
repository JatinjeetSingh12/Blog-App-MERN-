import React from 'react'
import BlogContext from './BlogContext'

const BlogState = (props) => {
  return (
    <>
      <BlogContext.Provider>
        {props}
      </BlogContext.Provider>
    </>
  )
}

export default BlogState
