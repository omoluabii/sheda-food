import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal} from 'react-bootstrap';



const Navbar = () => {
  const [showlogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showSignup, setShowSignup] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

    return ( 
    <nav class="navbar navbar-expand-lg  fixed-top navbar-light " id="Navbar1">
    <a class="navbar-brand" href="#">SHEDA <span class="food"> FOOD </span>  </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon toggler"> <i class="fa fa-angle-double-down"></i></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav mx-auto">
        <li class="nav-item"> 
          <a class="nav-link" href="#" variant="primary" onClick={handleShowLogin}>LOGIN<span class="sr-only">(current)</span></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" onClick={handleShowSignup}>SIGN UP</a>
        </li>
        
      </ul>

      <ul class="navbar-nav ">
       
        <li class="nav-item">
          <a class="nav-link" href="#!">+234 8012 345 678</a>
        </li>

        </ul>

        <ul class="navbar-nav ">
        <li class="nav-item">
        <a className="nav-link">
        <a href="#" class="color-o"><i class="fa fa-facebook mr-3"></i></a>
        <a href="#" class="color-o"><i class="fa fa-instagram mr-3"></i></a>
        <a href="#" class="color-o"><i class="fa fa-twitter mr-3"></i></a>
        <a href="#" class="color-o"><i class="fa fa-linkedin mr-3"></i></a>
        <a href="#" class="color-o"><i class="fa fa-whatsapp"></i></a>
        </a>
        </li>
        </ul>
  
    </div>

{/* Login */}
    <Modal show={showlogin} onHide={handleCloseLogin} animation={false}>
        <Modal.Header closeButton>
           <h3 class=" color-o login-h3">Login</h3>
        </Modal.Header>
        <Modal.Body>
        <div id="login">

            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-10">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            
                            <div class="form-group">
                                <label for="username" class="color-o">Email</label><br/>
                                <input type="email" name="email" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="color-o">Password</label><br/>
                                <input type="text" name="password" id="password" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="color-o"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                <input type="submit" name="submit" class="btn btn-color-o text-white btn-md" value="submit"/>
                                <a href="#" class="color-o" class="color-o register ">Register here</a>
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
           <h3 class=" color-o login-h3">Sign Up</h3>
        </Modal.Header>
        <Modal.Body>
        <div id="login">

            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-10">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            
                        <div class="form-group">
                                <label for="text" class="color-o">Name</label><br/>
                                <input type="text" name="name" id="username" class="form-control"/>
                            </div>                            <div class="form-group">
                                <label for="email" class="color-o">Email</label><br/>
                                <input type="email" name="email" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="username" class="color-o">Phone Number</label><br/>
                                <input type="number" name="number" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="color-o">Password</label><br/>
                                <input type="text" name="password" id="password" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-color-o text-white btn-md" value="submit"/>
                                <a href="#" class="color-o" class="color-o register ">Login here</a>
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

  

}
 
export default Navbar;