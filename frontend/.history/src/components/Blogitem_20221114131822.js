import React from 'react'

const Blogitem = (props) => {
    const { title,description,image } = props
    return (
        <>
            <div className="container">

                <div className="card" style="width: 30rem;">
                    <img src="https://sm.ign.com/ign_nl/news/t/the-last-o/the-last-of-us-part-2-is-getting-a-ps5-exclusive-performance_mg3b.jpg"
                        className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text"></p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Blogitem
