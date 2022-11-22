import React, { useContext, useEffect, useRef,useState } from 'react'
import BlogContext from '../context/BlogContext'
import Blogitem from './Blogitem';

const Readblogs = () => {
    const context = useContext(BlogContext);
    const { getBlogs, blogs,editBlog } = context;


    const [credintials, setCredential] = useState({ id: "", etitle: "", edescription: "", eimage: "" });

    useEffect(() => {
        getBlogs();
    }, [])

    const ref = useRef();
    const refclose = useRef();

    const updateBlog = (currentNote) => {
        ref.current.click();
        setCredential({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, eimage: currentNote.url });
    }

    const handleclicked = (e) => {
        e.preventDefault();
        editBlog(credintials.id, credintials.etitle, credintials.edescription,credintials.eimage);
        refclose.current.click();
    }

    const onchange = (e) => {
        setCredential({ ...credintials, [e.target.name]: e.target.value });
    }




    return (
        <>

            <button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Blog</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label forhtml="etitle" className="form-label">Title</label>
                                <input type="text" className="form-control" name='etitle' id="etitle"  onChange={onchange} />
                            </div>
                            <div className="mb-3">
                                <label forhtml="edescription" className="form-label">Description</label>
                                <input type="text" className="form-control" name='edescription' id="edescription" onChange={onchange} />
                            </div>
                            <div className="mb-3">
                                <label forhtml="eimage" className="form-label">Imageimage</label>
                                <input type="text" className="form-control" name='eimage' id="eimage" onChange={onchange} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={closeref} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleclicked}>Update Blog</button>
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
