import React from 'react';
import Logo from './logo1.png'

const Footer = () => {
    return ( 
        <footer class="page-footer  font-small unique-color-dark pt-2">
  
    <div class="container text-center text-md-left mt-5">

      <div class="row mt-3">
  
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
   
          <h6 class="text-uppercase font-weight-bold">About Us</h6>
          <hr class=" accent-2 mb-4 mt-0 d-inline-block mx-auto" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus dolor ducimus voluptatibus cupiditate est? Ab officia voluptates illo possimus.</p>

          <div id="socials">
                  <a href="#"><i class="fa fa-facebook mr-3"></i></a>
                  <a href="#"><i class="fa fa-instagram mr-3"></i></a>
                  <a href="#"><i class="fa fa-twitter mr-3"></i></a>
                  <a href="#"><i class="fa fa-linkedin mr-3"></i></a>
                  <a href="#"><i class="fa fa-whatsapp"></i></a>
                  </div>  
  
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <img class="footer-logo" src={ Logo }/>
  
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
          <h6 class="text-uppercase font-weight-bold">Contact</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
          <p>
            <i class="fa fa-home mr-3"></i>  No 2, Ajegunle Road, Ikeja.</p>
          <p>
            <i class="fa fa-envelope mr-3"></i> info@example.com</p>
          <p>
            <i class="fa fa-phone mr-3"></i> +234 8012 345 678</p>
          <p>
            <i class="fa fa-print mr-3"></i> +234 8012 345 678</p>
  
        </div>
       
  
      </div>
     
  
    </div>
   
  
   
    <div class="footer-copyright text-center py-3">© 2020 Copyright: Sheda Food

    </div>
   
  
  </footer>
     );
}
 
export default Footer;