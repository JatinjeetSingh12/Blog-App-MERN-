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



function App() {


  const [alert, setalert] = useState(null);
  const showAlert = (message) => {
    setalert({
      msg: message,
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }


  return (
    <>
      <BlogState >

        <BrowserRouter>
          <Navbar />
          <Alert/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/addblog' element={<Addblog />} />
            <Route path='/yourblog' element={<Myblogs />} />
          </Routes>
        </BrowserRouter>

      </BlogState>
    </>
  );
}

export default App;
