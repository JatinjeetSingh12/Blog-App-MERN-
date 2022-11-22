import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext';
import Blogitem from './Blogitem';

const Yourblogs = () => {
  const context = useContext(BlogContext);
  const { blogs } = context
  return (
    <>
      <div className="container my-2">
        <h1>Your Blogs</h1>
        <div className='row'>
          {blogs.map(blog => {
            return <div className='col-md-5'>
              <Y blog={blog}  key={blog._id} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Yourblogs
