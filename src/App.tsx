import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
