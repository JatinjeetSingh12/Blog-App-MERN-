import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext';


const Addblog = () => {
    const context = useContext(BlogContext);
    const {Addblog}
    
    const handleAddblog = (e)=>{
        e.preventDefault();
    }
    return (
        <>
        <div className="container mx-4" >
            <h1>Add Blog</h1>

            <form onSubmit={handleAddblog}>
                <div className="mb-3">
                    <label forhtml="tile" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label forhtml="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" />
                </div>
                <div className="mb-3">
                    <label forhtml="url" className="form-label">ImageUrl</label>
                    <input type="text" className="form-control" id="url" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Addblog
