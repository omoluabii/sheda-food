import React from 'react';

const Transaction = () => {
    return ( 
        <>
        <section class="transaction">
            <div class="container">
            <div >
                  <h1 class="title mt-5">
                  Transactions
                  </h1>
              </div>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Order ID</th>
      <th scope="col">Date</th>
      <th scope="col">Item</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>#12433</td>
      <td>12-08-2020</td>
      <td>Whole Fried Chicken</td>
      <td>Delivered</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>#12434</td>
      <td>14-08-2020</td>
      <td>Fried Rice & Chicken</td>
      <td>Delivered</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>#12435</td>
      <td>16-08-2020</td>
      <td>Ice Cream</td>
      <td>Pending</td>
    </tr>
  </tbody>
</table>


</div>
</section>
        </>
     );
}
 
export default Transaction;