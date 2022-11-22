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
        <Routes>
          <Navbar />
          <Route path='/login'>

          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
