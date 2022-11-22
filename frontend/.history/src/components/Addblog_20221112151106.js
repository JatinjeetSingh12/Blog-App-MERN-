import React from 'react'

const Addblog = () => {
    return (
        <>
        <div className="container mx-4" >

            <form>
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
