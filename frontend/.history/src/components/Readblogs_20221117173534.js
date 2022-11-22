import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BlogContext from '../context/BlogContext'
import Blogitem from './Blogitem';

const Readblogs = () => {
    const context = useContext(BlogContext);
    const { getAllblogs, ALLblogs } = context;

    const navigate = useNavigate();

    

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getAllblogs();
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
                        return <div style={{width:"40%",margin:"auto",boxShadow:"10px 10px 20px#"}}>
                            <Blogitem blog={blog} key={blog._id} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Readblogs
