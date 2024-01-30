import { useState, useEffect } from 'react';
import './App.css';
import HeaderBody from './components/HeaderBody';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import Wishlist from './components/Wishlist';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    console.log(token);
    if (token) {
      setAuthorized(true);
    }
  })

  return (
    <div className="App">

      <BrowserRouter>
        <HeaderBody isAuthorized={authorized} />
        <div className="container-body">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/movies" element={<ProtectedRoute isAuthorized={authorized}><Movies /></ProtectedRoute>}></Route>
            <Route path="/wishlist" element={<ProtectedRoute isAuthorized={authorized}><Wishlist /></ProtectedRoute>}></Route>
            <Route path="/login" element={<Login data={{ authorized, setAuthorized }} />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/logout" element={<Logout data={{ authorized, setAuthorized }} />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
