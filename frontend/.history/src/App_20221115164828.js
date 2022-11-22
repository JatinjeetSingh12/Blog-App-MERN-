import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Addblog from './components/Addblog';
import Home from './components/Home';
import { useState } from 'react';
import BlogContext from './context/BlogContext';






function App() {
  // const navigate = useNavigate();

  const blogsInitial = [];
  const [blogs, setBlogs] = useState(blogsInitial);

  const Loginuser = async (email, password) => {
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      // navigate("/");
    }
  }

  const CreateUser = async (name, email, password) => {
    const response = await fetch('http://localhost:5000/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      // navigate("/");
    }
  }

  const addBlog = async (title, description, image) => {
    const response = await fetch('http://localhost:5000/blog/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, image })
    });
    const json = await response.json();
    setBlogs(blogs.concat(json));
    console.log(json)
  }


  const getBlogs = async () => {
    const response = await fetch('http://localhost:5000/blog/fetch', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setBlogs(json);
  }

  const editBlog = async (id, title, description, image) => {
    const response = await fetch(`http://localhost:5000/blog/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, image })
    });
    const eblogs = JSON.parse(JSON.stringify(blogs));
    // update
    for (let i = 0; i < blogs.length; i++) {
      const element = eblogs[i];
      if (element._id == id) {
        element.title = title;
        element.description = description;
        element.image = image;
      }
    }
    setBlogs(eblogs);
  }

  const deleteBlog = async (id) => {
    const response = await fetch(`http://localhost:5000/blog/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    const newBlogs = blogs.filter((blog) => { return blog._id !== id });
    setBlogs(newBlogs);
  }

  return (
    <>
      <BlogContext.Provider value={{ blogs, getBlogs, Loginuser, CreateUser, addBlog, getBlogs, deleteBlog, editBlog }}>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/addblog' element={<Addblog />} />

          </Routes>
        </BrowserRouter>
      </BlogContext.Provider>
    </>
  );
}

export default App;
