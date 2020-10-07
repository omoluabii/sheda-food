import React from "react";
import img1 from "../How-it-works/delivery.svg"
import img2 from "../How-it-works/spoon.svg"
import img3 from "../How-it-works/pay.svg"

const HowItWorks = () => {
  return (
    <section id="HowItWorks">
      <div class="container text-center mt-3">
        <h3> How It Works</h3>
        <div
          class="row row-cols-1 row-cols-md-3 mt-5
            mt-5">
                
          <div class="col mb-5 ">
            <div class="card h-100 card shadow">
              <div class="card-body">
              <img src={img2} width="60px" />
                <h4> Choose your Tasty Food </h4>
                <p class="card-text">
                  {" "}
                  Pick your favourite dish from our Menu or Select from
                  Categories
                </p>
              </div>
            </div>
          </div>
          <div class="col mb-5 ">
            <div class="card h-100 card shadow">
              <div class="card-body">
              <img src={img3} width="60px"  />
                <h4> Confirm your Payment </h4>
                <p class="card-text"> Order and confirm your Payment.</p>
              </div>
            </div>
          </div>
          <div class="col mb-5 ">
            <div class="card h-100 card shadow">
              <div class="card-body">
               <img src={img1} width="60px"  />
                <h4> Delivery </h4>
                <p class="card-text">
                  {" "}
                  Your Food will be delivered to your preferred address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
