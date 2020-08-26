import React from 'react';

const TopNav = () => {
    return ( 
        <section class="hide-on-small">
        <div class="row nav1">
            <div class="col-md-3">
              <p><i class="fa fa-home mr-3"></i> No 2, Ajegunle Road, Ikeja.</p>
            </div>
            <div class="col-md-3">
             <p> <i class="fa fa-print mr-3"></i>+234 8012 345 678</p>  
          </div>
          <div class="col-md-3">
              <div id="socials">
                  <a href="#"><i class="fa fa-facebook mr-3"></i></a>
                  <a href="#"><i class="fa fa-instagram mr-3"></i></a>
                  <a href="#"><i class="fa fa-twitter mr-3"></i></a>
                  <a href="#"><i class="fa fa-linkedin mr-3"></i></a>
                  <a href="#"><i class="fa fa-whatsapp"></i></a>
                  </div>   
          </div>
          <div class="col-md-3"> 
          <input type="button" value="Order Now" class="order"/>
          </div>
        </div>  
               
       </section>
     );
}
 
export default TopNav;