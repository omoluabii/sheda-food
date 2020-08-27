import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Menu from './components/Menu/menu'
import Footer from './components/Footer/Footer'
import HowItWorks from './components/How-it-works/How-it-works'

function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <HowItWorks/>
    <Menu/>
    <Footer/>
    </>
  );
}

export default App;
