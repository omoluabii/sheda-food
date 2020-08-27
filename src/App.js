import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import HowItWorks from './components/How-it-works/How-it-works'

function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <HowItWorks/>
    <Footer/>
    </>
  );
}

export default App;
