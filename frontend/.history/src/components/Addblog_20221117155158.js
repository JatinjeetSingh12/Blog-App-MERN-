import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BlogContext from '../context/BlogContext';


const AddBlog = () => {

    const navigate = useNavigate();
    const context = useContext(BlogContext);
    const { addBlog } = context;

    const [credintials, setCredential] = useState({ title: "", description: "", image: "" });

    const handleaddBlog = (e) => {
        e.preventDefault();
        addBlog(credintials.title, credintials.description, credintials.image);
    }

    const onchange = (e) => {
        setCredential({ ...credintials, [e.target.name]: e.target.value });
    }
    return (
        <>

         
                <div className="container mx-4" >
                    <h1>Add Blog</h1>

                    <form onSubmit={handleaddBlog}>
                        <div className="mb-3">
                            <label forhtml="title" className="form-label">Title</label>
                            <input type="text" className="form-control" name='title' onChange={onchange} id="title" />
                        </div>
                        <div className="mb-3">
                            <label forhtml="description" className="form-label">Description</label>
                            <input type="text" className="form-control" name='description' onChange={onchange} id="description" />
                        </div>
                        <div className="mb-3">
                            <label forhtml="image" className="form-label">ImageUrl</label>
                            <input type="text" className="form-control" name='image' onChange={onchange} id="image" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            


        </>
    )
}

export default AddBlog
