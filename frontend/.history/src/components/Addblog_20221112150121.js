import React from 'react'

const Addblog = () => {
    return (
        <>
            <form>
                <div class="mb-3">
                    <label forhtml="tile" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title"  />
                </div>
                <div class="mb-3">
                    <label forhtml="description" class="form-label">Description</label>
                    <input type="text" class="form-control" id="description" />
                </div>
                <div class="mb-3">
                    <label for="url" class="form-label">ImageUrl</label>
                    <input type="text" class="form-control" id="url" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Addblog
