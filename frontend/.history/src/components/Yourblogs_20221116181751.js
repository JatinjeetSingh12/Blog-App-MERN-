import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext';

const Yourblogs = () => {
  const context = useContext(BlogContext);
  const { blogs } = context
  return (
    <>
      <div className="container my-2">
        <h1>Blogs</h1>
        <div className='row'>
          {ALLblogs.map(blog => {
            return <div className='col-md-5'>
              <Blogitem blog={blog} updateBlog={updateBlog} key={blog._id} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Yourblogs
