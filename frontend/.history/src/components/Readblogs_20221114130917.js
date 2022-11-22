import React, { useContext, useEffect } from 'react'
import BlogContext from '../context/BlogContext'

const Readblogs = () => {
    const context = useContext(BlogContext);
    const { getBlogs, blogs } = context;

    useEffect(() => { }, [])

    return (
        <>

            <div className='row'></div>
            {blogs.map(blogs => {
                return <div className='col-md-2'>
                    <Blogitem blogs={blogs} />
                </div>
            })}
        </>
    )
}

export default Readblogs
