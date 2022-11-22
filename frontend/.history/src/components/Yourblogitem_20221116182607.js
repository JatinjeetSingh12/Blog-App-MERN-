import React from 'react'

const Yourblogitem = (props) => {
    
    return (
        <>
            <div className="card" style={{ width: "30rem" }}>
                <img src={blog.image}
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <i className="fa-solid fa-trash mx-2" onClick={deleted} ></i>
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateBlog(blog) }}></i>
                </div>
            </div>
        </>
    )
}

export default Yourblogitem
