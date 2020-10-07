import React from "react";
import {Link} from 'react-router-dom'

const MyOrder = () => {
  return (
    <>
      <section class="myorder">
        <div class="container">
          <div class="add-ons">
            <h1 class="title mt-5">My Order</h1>
         
            <h6 >Account Balance: ₦12,000.00</h6>  
            <p> Wish to Add more Items? <Link class="home" to="/"> Click Here </Link></p>
          </div>

          <table class="table table-striped ">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  Whole Fried Chicken
                 <div>
                  <input class="button delete" type="btn" value="DELETE" /> </div>
                </td>
                <td>
                  <form action="">
                    <select name="numbers">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </form>
                </td>
                <td>2500</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Burger and Grilled Chicken
                <div>
                  <input class="button delete" type="btn" value="DELETE" /> </div>
                </td>
                <td>
                  <form action="">
                    <select name="numbers">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </form>
                </td>
                <td>2000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Rice & Fried Chicken
                <div>
                  <input class="button delete" type="btn" value="DELETE" /> </div>
                </td>
                <td>
                  <form action="">
                    <select name="numbers">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </form>
                </td>
                <td>3500</td>
              </tr>
            </tbody>
          </table>


          <div>
              Add Address
              <p>lorem Ipum Adens Yunh Adstun Aonna Uyna</p>
          </div>

          <input class="btn checkout mb-3" value="CHECKOUT"/>
        </div>
      </section>


    </>
  );
};

export default MyOrder;
