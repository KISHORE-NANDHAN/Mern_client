import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './components/home'
import Navbar from './components/Navbar';
import Register from './components/register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div>
    <Router>
      <Navbar/>
      <Home/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/logout" element={<h1>Logout</h1>}/>
      </Routes>
    </Router>
  </div>
    </React.StrictMode>
)