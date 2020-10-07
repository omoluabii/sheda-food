import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import 'animate.css'
import './Animate.css'
import GenNavbar from './components/Navbar/Navbar'
import UserNavbar from './components/Navbar/UserNavbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import UserDashboard from './pages/UserDashboard'
import MyOrderPage from './pages/myOrderPage'
import PageNotFound from './PageNotFound'


function App() {
  let Navbar
  if(localStorage.getItem('token')){
    Navbar=<UserNavbar/>
  }
  else{
    Navbar=<GenNavbar/>
  }
  return (
    <BrowserRouter>
    {Navbar}

      <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/account" component={UserDashboard}/>

        <Route exact path="/order" component={MyOrderPage}/>

        <Route exact path="*" component={PageNotFound}/>

      </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
