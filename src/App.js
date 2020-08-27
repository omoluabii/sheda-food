import React from 'react';
import './App.css';
import TopNav from './components/Navbar/TopNav'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Menu from './components/Menu/menu'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
    <TopNav/>
    <Navbar/>
    <Homepage/>
    <Menu/>
    <Footer/>
    </>
  );
}

export default App;
