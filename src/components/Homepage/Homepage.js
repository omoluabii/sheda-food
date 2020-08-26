import React from 'react';
import food from '../Homepage/food1.png'

const Homepage = () => {
    return ( 
        <div>
     <section> 
        <div class="showcase">
            <div class="showcase-content">
                <h1 class="welcome">Welcome</h1>
                <h2>
                    Sheda Food
                </h2>
                <input type="button" value="Order a Meal" />
            </div>
            
        </div> 
     </section>

     <section class="Homepage2">
         <div class="container">
         <div class="row">
         <div class="col-md-8">
        <h4> Your <span class="food"> favourite </span> food <br/> delivered <span class="food"> to you </span> </h4>
        <p> Order your food at any time and we will <br/> deliver them directly to your doorstep </p>
        </div>
        <div class="col-md-4">
        <img src={food} class="card-img-top homepage_image " alt="..."/>
        </div>

        </div>
         </div>
     </section>
     </div>
     );
}
 
export default Homepage;