import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Navbar = () => {

  // For the Login and SignUp Modal
  const [showlogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showSignup, setShowSignup] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);
  //end For the Login and SignUp Modal

// For the Login and SignUp Form
  // const [email, setEmail]=useState("")
  // const [password, setPassword]=useState("")


  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  const [password, setPassword]=useState("")
//End For the Login and SignUp Form


  return (
    <nav class="navbar navbar-expand-lg  fixed-top navbar-light " id="Navbar1">
       <Link class="navbar-brand" to="/">  SHEDA <span class="food"> FOOD </span> {" "}</Link>
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
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" onClick={handleShowSignup}>
              SIGN UP
            </a>
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

      {/* Login */}
      <Modal show={showlogin} onHide={handleCloseLogin} animation={false}>
        <Modal.Header closeButton>
          <h3 class="  login-h3">Login</h3>
        </Modal.Header>
        <Modal.Body>
          <div id="login">
            <div
              id="login-row"
              class="row justify-content-center align-items-center">
              <div id="login-column" class="col-md-10">
                <div id="login-box" class="col-md-12">
                  <form id="login-form" class="form" action="" method="post">
                    <div class="form-group">
                      <label for="username" class="">
                        Email
                      </label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        id="username"
                        class="form-control" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                    </div>
                    <div class="form-group">
                      <label for="password" class="">
                        Password
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        value={password} onChange={(event)=>setPassword(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="remember-me" class="">
                        <span>Remember me</span> 
                        <span>
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                          />
                        </span>
                      </label>
                      <br />
                      <input
                        type="submit"
                        name="Submit"
                        class="btn btn-color-o  btn-md"
                        value="submit"
                      />
                      <a href="#" class="color-o register" onClick={handleShowSignup}>
                        Register here
                      </a>
                      <br />
                      <div class="forget-password mt-2">
                      <a><label>
                        Forget Password, Reset Here.
                        
                      </label></a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Sign Up */}
      <Modal show={showSignup} onHide={handleCloseSignup} animation={false}>
        <Modal.Header closeButton>
          <h3 class="  login-h3">Sign Up</h3>
        </Modal.Header>
        <Modal.Body>
          <div id="login">
            <div
              id="login-row"
              class="row justify-content-center align-items-center"
            >
              <div id="login-column" class="col-md-10">
                <div id="login-box" class="col-md-12">
                  <form id="login-form" class="form" action="" method="post">
                    <div class="form-group">
                      <label for="text" class="">
                        Name
                      </label>
                      <br />
                      <input
                        type="text"
                        name="name"
                        id="username"
                        class="form-control"
                        value={name} onChange={(event)=>setName(event.target.value)}
                      />
                    </div>{" "}
                    <div class="form-group">
                      <label for="email" class="">
                        Email
                      </label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        id="username"
                        class="form-control"
                        value={email} onChange={(event)=>setEmail(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="username" class="">
                        Phone Number
                      </label>
                      <br />
                      <input
                        type="number"
                        name="phone"
                        id="username"
                        class="form-control"
                        value={phone} onChange={(event)=>setPhone(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" class="">
                        Password
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        value={password} onChange={(event)=>setPassword(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="submit"
                        name="submit"
                        class="btn btn-color-o  btn-md"
                        value="submit"
                      />
                      <a href="#" class=" register color-o" onClick={handleShowLogin}>
                        Login here
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </nav>
  );
};

export default Navbar;
