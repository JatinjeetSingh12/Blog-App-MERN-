import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Addblog from './components/Addblog';
import Home from './components/Home';
import BlogState from './context/BlogState';
import Mblogs from './components/Myblogs';



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
            <Route path='/yourblog' element={<My />} />
          </Routes>
        </BrowserRouter>

      </BlogState>
    </>
  );
}

export default App;
