import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/login'  element={<Login/>} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
