import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/login' element={<Signup>}>
          </Route>
          <Route path='/signup'>

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
