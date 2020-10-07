import React, { useState } from "react";
import {Link} from 'react-router-dom'
import user from './User.png'

const Navbar = (props) => {

  const HandleLogout = ( ) => {
    localStorage.removeItem("token")
    props.location.push('/')
  }
  return (
    <nav class="navbar navbar-expand-lg  fixed-top navbar-light " id="Navbar1">
      <Link class="navbar-brand" to="/">  SHEDA <span class="food"> FOOD </span>  {" "}</Link>
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
        <Link class="nav-link" to="/"> HOME</Link>
        </li>

        <li class="nav-item">
        <Link class="nav-link" to="/account"> ACCOUNT </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/order"> MY ORDER </Link>
          </li>
        </ul>

        <ul class="navbar-nav ">
          

          <li>

          <div class="dropdown">
            <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
            JANE DOE 
            <img class="user-logo" width="25" height="25" alt="" src={user}/>
            </a>

            <div class="dropdown-menu logout" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item logout2" onClick={HandleLogout} >Logout</a>
            
            </div>
          </div>
          </li>

        </ul>


      </div>

    </nav>
  );
};

export default Navbar;
