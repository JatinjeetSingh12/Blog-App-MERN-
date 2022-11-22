import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import BlogState from './context/BlogState';
import Addblog from './components/Addblog';
import Home from './components/Home';

function App() {
  return (
    <>
      <BlogState>

        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path='/' element={<Home />}/></Route>
            <Route path='/login' element={<Login />/}></Route>
            <Route path='/signup' element={<Signup />/}></Route>
            <Route path='/addblog' element={<Addblog />}></Route>
          </Routes>
        </BrowserRouter>
      </BlogState>


    </>
  );
}

export default App;
