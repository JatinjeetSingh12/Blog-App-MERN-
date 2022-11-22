import React, { useContext, useEffect, useRef } from 'react'
import BlogContext from '../context/BlogContext'
import Blogitem from './Blogitem';

const Readblogs = () => {
    const context = useContext(BlogContext);
    const { getBlogs, blogs } = context;

    


    useEffect(() => {
        getBlogs();
    }, [])

    const ref = useRef();

    const updateBlog = ()=>{
        ref.current.click();

    }



    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label forhtml="Etitle" className="form-label">Title</label>
                                <input type="text" className="form-control" name='Etitle' id="Etitle" />
                            </div>
                            <div className="mb-3">
                                <label forhtml="Edescription" className="form-label">Description</label>
                                <input type="text" className="form-control" name='Edescription' id="Edescription" />
                            </div>
                            <div className="mb-3">
                                <label forhtml="Eurl" className="form-label">ImageUrl</label>
                                <input type="text" className="form-control" name='Eurl' id="Eurl" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update Blog</button>
                        </div>
                    </div>
                </div>
            </div>

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
