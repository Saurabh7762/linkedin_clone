import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='login' element={<Login/>}/>
           <Route path='Home' element={<><Header/><Home/></> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
