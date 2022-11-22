import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Addblog from './components/Addblog';
import Home from './components/Home';
import { useState } from 'react';
import BlogContext from './context/BlogContext';
import {useNavigate} from "react-router-dom"






function App() {

  
  
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
