import React from 'react'

const Blogitem = (props) => {
    const { blog } = props
    return (
        <>
            <div className="container">

                <div className="card" style={{width: "30rem"}}>
                    <img src={blog.image}
                        className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{blodescription}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Blogitem
