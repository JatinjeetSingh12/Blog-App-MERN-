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
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card'sorpjgfopdfjogj
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur libero asperiores debitis facere repellat ex ea, aspernatur inventore fuga maxime animi laborum dolorum nisi sapiente. Earum itaque ab assumenda quos.
                                content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Blogitem
