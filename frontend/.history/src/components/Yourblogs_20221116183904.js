import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext';
import Yourblogitem from './Yourblogitem';

const Yourblogs = () => {
  const context = useContext(BlogContext);
  const { blogs,getBlogs } = context

  const [credintials, setCredential] = useState({ id: "", etitle: "", edescription: "", eimage: "" });

  useEffect(() => {
    if (localStorage.getItem('token')) {
        getBlogs();
    }
    else {
        navigate("/login");
    }
}, [])


  const ref = useRef();
  const refclose = useRef();

  const updateBlog = (currentNote) => {
    ref.current.click();
    setCredential({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, eimage: currentNote.image });
  }

  const handleclicked = (e) => {
    e.preventDefault();
    editBlog(credintials.id, credintials.etitle, credintials.edescription, credintials.eimage);
    refclose.current.click();
  }

  const onchange = (e) => {
    setCredential({ ...credintials, [e.target.name]: e.target.value });
  }


  return (
    <>
      <button type="button" ref={ref} style={{ display: "none" }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Blog</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label forhtml="etitle" className="form-label">Title</label>
                <input type="text" value={credintials.etitle} className="form-control" name='etitle' id="etitle" onChange={onchange} />
              </div>
              <div className="mb-3">
                <label forhtml="edescription" className="form-label">Description</label>
                <input type="text" value={credintials.edescription} className="form-control" name='edescription' id="edescription" onChange={onchange} />
              </div>
              <div className="mb-3">
                <label forhtml="eimage" className="form-label">imageUrl</label>
                <input type="text" value={credintials.eimage} className="form-control" name='eimage' id="eimage" onChange={onchange} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={refclose} data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleclicked}>Update Blog</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-2">
        <h1>Your Blogs</h1>
        <div className='row'>
          {blogs.map(blog => {
            return <div className='col-md-5'>
              <Yourblogitem blog={blog} key={blog._id} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Yourblogs
