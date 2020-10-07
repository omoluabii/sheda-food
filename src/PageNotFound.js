import React from 'react';
import {Link} from 'react-router-dom'
import img from "../src/error.svg"

const PageNotFound = () => {
    return ( 

       <>
        <section class="pagenotfound">
            <div class="container">
                <div class="animated infinite Bounce">
                <img  src={img} />

                </div>

                <div>
                    <h4 class="sorry"> oh! Sorry, the web page you requested not found</h4>
                </div>
                <hr class="mt-5"/>
            </div>
        </section> 
        <section class="pagenotfound mt-5">
            <div class="container">
            <Link to="/"> <h3 class="go-home mb-4 mt-4"> Click here to go back Home </h3> </Link>
            </div>
        </section>
       </> 
     );
}
 
export default PageNotFound;