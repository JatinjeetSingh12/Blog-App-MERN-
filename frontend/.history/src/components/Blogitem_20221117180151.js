import React from 'react'

const Blogitem = (props) => {
    const { blog} = props;


    return (
        <>
            <div className="card" style={{ width: "42rem" }}>
                <img src={blog.image}
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>

                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <i class="fa-regular fa-comment mx-2"></i>

                </div>
            </div>
        </>
    )
}

export default Blogitem