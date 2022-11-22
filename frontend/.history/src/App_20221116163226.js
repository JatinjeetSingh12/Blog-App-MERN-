import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Addblog from './components/Addblog';
import Home from './components/Home';
import { useState } from 'react';
import BlogContext from './context/BlogContext';
import { useNavigate } from "react-router-dom"
import BlogState from './context/BlogState';






function App() {



  return (
    <>
      <BlogState >

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/addblog' element={<Addblog />} />

          </Routes>
        </BrowserRouter>
      </BlogState>
    </>
  );
}

export default App;
