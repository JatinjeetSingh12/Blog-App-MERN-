import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BlogContext from '../context/BlogContext'
import Blogitem from './Blogitem';

const Readblogs = () => {
    const context = useContext(BlogContext);
    const { getAllblogs, ALLblogs, editBlog } = context;

    const navigate = useNavigate();

    const [credintials, setCredential] = useState({ id: "", etitle: "", edescription: "", eimage: "" });

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getAllblogs();
        }
        else {
            navigate("/login");
        }
    }, [])

    const ref = useRef();
    const refclose = useRef();

    const updateBlog = (currentNote) => {
        ref.current.click();
        setCredential({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, eimage: currentNote.image });
    }

    const handleclicked = (e) => {
        e.preventDefault();
        editBlog(credintials.id, credintials.etitle, credintials.edescription, credintials.eimage);
        refclose.current.click();
    }

    const onchange = (e) => {
        setCredential({ ...credintials, [e.target.name]: e.target.value });
    }




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
