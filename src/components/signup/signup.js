import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Signup = (props) => {

    // For the SignUp Form
  const [firstname, setFirstName]=useState("")
  const [lastname, setLastName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  const [password, setPassword]=useState("")

    return ( 

        <Modal show={props.show} onHide={props.onHide}>
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
                        First Name
                      </label>
                      <br />
                      <input
                        type="text"
                        name="firstname"
                        id="username"
                        class="form-control"
                        value={firstname} onChange={(event)=>setFirstName(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="text" class="">
                       Last Name
                      </label>
                      <br />
                      <input
                        type="text"
                        name="lastname"
                        id="username"
                        class="form-control"
                        value={lastname} onChange={(event)=>setLastName(event.target.value)}
                      />
                    </div>
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
                        class="btn btn-color-o  btn-md shadow"
                        value="SUBMIT"
                      />
                      <a onClick={props.handleShowLogin} class=" register color-o">
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
     );
}
 
export default Signup;