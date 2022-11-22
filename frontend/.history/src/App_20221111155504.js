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
          <Route path=''>

          </Route>
          <Navbar />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
