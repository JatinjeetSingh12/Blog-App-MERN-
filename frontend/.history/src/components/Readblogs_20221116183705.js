import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BlogContext from '../context/BlogContext'
import Blogitem from './Blogitem';

const Readblogs = () => {
    const context = useContext(BlogContext);
    const { getAllblogs, ALLblogs, editBlog } = context;

    const navigate = useNavigate();

    

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getAblogs();
        }
        else {
            navigate("/login");
        }
    }, [])


    

    


    return (
        <>

           
            <div className="container my-2">
                <h1>Blogs</h1>
                <div className='row'>
                    {ALLblogs.map(blog => {
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
