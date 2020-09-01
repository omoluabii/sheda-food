import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import UserDashboard from './pages/UserDashboard'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/account" component={UserDashboard}/>

      </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
