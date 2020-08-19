import React from 'react';
const Navbar = () => {
    return ( <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Sheda Food</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Login<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign up</a>
        </li>
        <li class="nav-item">
          <h5 class="nav-link">08106801768</h5>
        </li>
        <li class="nav-item">
        <a className="nav-link">
                <i class="fab fa-instagram"></i>
            </a>
        </li>
        <li class="nav-item">
            <a className="nav-link">
                <i class="fab fa-twitter"></i>
            </a>
        </li>
        <li class="nav-item">
            <a className="nav-link">
                <i class="fab fa-facebook"></i>
            </a>
        </li>
      </ul>
    </div>
  </nav> );
}
 
export default Navbar;