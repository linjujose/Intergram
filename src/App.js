import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<SignUp/>} />
        <Route exact path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;