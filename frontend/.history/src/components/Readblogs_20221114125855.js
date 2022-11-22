import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'

const Readblogs = () => {
    const context = useContext(BlogContext);
    const { getBlogs, blogs } = context;

    return (
        <>
        <div className='row'></div>
            {blogs.map(blogs => {
               return <div  c>
                    <Blogitem blogs={blogs}/>
                </div>
            })}
        </>
    )
}

export default Readblogs
