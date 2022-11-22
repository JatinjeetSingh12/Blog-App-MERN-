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
            <div className="container my-2">
                <h1>Blogs</h1>
                <div className='row'>
                    {blogs.map(blog => {
                        return <div className='col-md-5'>
                            <Blogitem blog={blog} key={blog._id} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Readblogs
