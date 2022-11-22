import React from 'react'

const Blogitem = (props) => {
    const { title,description,image } = props
    return (
        <>
            <div className="container">

                <div className="card" style={{width: "30rem"}}>
                    <img src={blogsimage}
                        className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Blogitem
