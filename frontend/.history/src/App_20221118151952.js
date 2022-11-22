import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Addblog from './components/Addblog';
import Home from './components/Home';
import BlogState from './context/BlogState';
import Myblogs from './components/Myblogs';
import Alert from './components/Alert';
import { useContext, useState } from 'react';
import BlogContext from './context/BlogContext';



function App() {


  const context = useContext(BlogContext);
  // const {alert,showAlert} = context;


  return (
    <>
      <BlogState >

        <BrowserRouter>
          <Navbar showAlert = {showAlert} />
          <Alert alert={alert}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login showAlert = {showAlert} />} />
            <Route path='/signup' element={<Signup showAlert = {showAlert} />} />
            <Route path='/addblog' element={<Addblog />} />
            <Route path='/yourblog' element={<Myblogs />} />
          </Routes>
        </BrowserRouter>

      </BlogState>
    </>
  );
}

export default App;
