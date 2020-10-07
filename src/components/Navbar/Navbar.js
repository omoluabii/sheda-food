import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Login from '../login/login'
import Signup from '../signup/signup'


const Navbar = () => {

  // For the Login and SignUp Modal
  const [showlogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showSignup, setShowSignup] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);
  //end For the Login and SignUp Modal


  return (
    <nav class="navbar navbar-expand-lg  fixed-top navbar-light " id="Navbar1">
       <Link class="navbar-brand" to="/">  SHEDA <span class="food"> FOOD </span> </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon toggler">
          {" "}
          <i class="fa fa-angle-double-down"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              variant="primary"
              onClick={handleShowLogin}
            >
              LOGIN
            </a>
            <Login show={showlogin} onHide={handleCloseLogin} animation={false}/>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" onClick={handleShowSignup}>
              SIGN UP
            </a>
            <Signup show={showSignup} onHide={handleCloseSignup} animation={false}/>
          </li>
        </ul>

        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link" href="#!">
              +234 8012 345 678
            </a>
          </li>
        </ul>

        <ul class="navbar-nav ">
          <li class="nav-item">
            <a className="nav-link">
              <a href="#" class="color-o">
                <i class="fa fa-facebook mr-3"></i>
              </a>
              <a href="#" class="color-o">
                <i class="fa fa-instagram mr-3"></i>
              </a>
              <a href="#" class="color-o">
                <i class="fa fa-twitter mr-3"></i>
              </a>
              <a href="#" class="color-o">
                <i class="fa fa-linkedin mr-3"></i>
              </a>
              <a href="#" class="color-o">
                <i class="fa fa-whatsapp"></i>
              </a>
            </a>
          </li>
        </ul>
      </div>

     
    </nav>
  );
};

export default Navbar;
