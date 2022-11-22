import React from 'react'

const Addblog = () => {
    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
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
