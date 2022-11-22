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
        <div className="container">

        <h1 className='my-2'>Blogs</h1>
            <div className='row'>
                {blogs.map(blog => {
                    return <div className='col-md-4'>
                        <Blogitem blog={blog} key={blog._id} />
                    </div>
                })}
            </div>
                </div>
        </>
    )
}

export default Readblogs
