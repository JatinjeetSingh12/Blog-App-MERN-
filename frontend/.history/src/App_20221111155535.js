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
          <Route path='/login'>
          <Route path='/'>

          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
