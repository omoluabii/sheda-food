import React, { useState } from "react";

const Account = () => {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <section class="account">
        <div class="container">
          <div class="row ">
            <div class="col-md-6 wallet">
              <div>
                <h1 class="title mt-5">Wallet</h1>
              </div>

              <div class="account-balance">
                <p> Account Balance:</p>
                <h3 class=" cash"> ₦ 12,000.00</h3>
                <div class="add-fund">
                  <hr />
                  <label class="mt-2">Add Fund</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text "> <strong> ₦ </strong></div>
                    </div>
                    <input
                      class="form-control form-control"
                      type="number"
                      name="amount"
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                    />
                  </div>
                </div>

                <input
                  type="button"
                  value="Fund Wallet"
                  class="button btn shadow"
                />
              </div>
            </div>

            <div class="col-md-6 account-details">
              <div>
                <h1 class="title mt-5">Account Details</h1>
              </div>
              <div class="mt-4">
                <ul>
                  <fieldset>
                    <li>
                      <label class="mt-2">Name</label>
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </li>

                    <li>
                      <label class="mt-2">Email</label>

                      <input
                        class="form-control form-control-lg"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </li>
                  </fieldset>
                  <li>
                    <label class="mt-2">Phone Number</label>

                    <input
                      class="form-control form-control-lg"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </li>

                  <li>
                    <label class="mt-2">Address</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      name="Address"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </li>
                  <input
                    class="mt-3  button btn shadow"
                    type="button"
                    value="Update Details"
                  />
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Account;
