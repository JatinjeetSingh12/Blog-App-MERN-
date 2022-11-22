import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'

const Readblogs = () => {
    const context = useContext(BlogContext);
    const { getBlogs, blogs } = context;

    return (
        <>
            {blogs.map(blogs => {
                <div>
                    <Blogitem blogs={blogs} />
                </div>
            })}
        </>
    )
}

export default Readblogs
