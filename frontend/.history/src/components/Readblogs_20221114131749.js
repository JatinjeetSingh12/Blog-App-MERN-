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

            <div className='row'></div>
            {blogs.map(blogs => {
                return <div className='col-md-2'>
                    <Blogitem blogs={blogs} key />
                </div>
            })}
        </>
    )
}

export default Readblogs
