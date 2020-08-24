import React from 'react';
import './App.css';
import TopNav from './components/Navbar/TopNav'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
    <TopNav/>
    <Navbar/>
    <Homepage/>
    <Footer/>
    </>
  );
}

export default App;
