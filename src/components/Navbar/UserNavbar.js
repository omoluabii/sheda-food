import React, { useState } from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {

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
        </ul>

        <ul class="navbar-nav ">
          <li class="nav-item">
          <Link class="nav-link" to=""> MY ORDER </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
