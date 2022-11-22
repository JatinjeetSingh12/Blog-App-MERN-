import React, { useContext, useEffect } from 'react'
import BlogContext from '../context/BlogContext'
import Blogitem from './Blogitem';

const Readblogs = () => {
    const context = useContext(BlogContext);
    const { getBlogs, blogs } = context;

    useEffect(() => {
        getBlogs();
     }, [])

    return (
        <>

            <div className='row'>

            {blogs.map(blog => {
            </div>
                return <div className='col-md-3'>
                    <Blogitem blog={blog} key={blog._id} />
                </div>
            })}
        </>
    )
}

export default Readblogs
