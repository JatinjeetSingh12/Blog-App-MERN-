import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/login' element={<S}>
          </Route>
          <Route path='/signup'>

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;