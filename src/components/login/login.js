import React,{useState} from 'react';
import { Modal } from "react-bootstrap";
import {Link} from 'react-router-dom'


const Login = (props) => {

    // For the Login Form
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
    return ( 
        <Modal show={props.show} onHide={props.onHide}>
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
                        class="btn btn-color-o  btn-md shadow"
                        value="submit"
                      />
                      <a href="#" class="color-o register" >
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

     );
}
 
export default Login;