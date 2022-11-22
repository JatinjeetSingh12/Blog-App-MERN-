import React from 'react'
import BlogContext from './BlogContext'

const BlogState = () => {
  return (
    <>
      <BlogContext.Provider>
        {prop}
      </BlogContext.Provider>
    </>
  )
}

export default BlogState
