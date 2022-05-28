import React, { Component } from 'react';

export default class AdminDashboard extends Component {
    render() {
        return (
            <div>
                {/* <!-- Your Seller Account Starts --> */}
  <div class="container mt-5">
    <h2>Your Seller Account</h2>
    {/* <!-- Seller Account Panel Starts --> */}
    <div class="row">
      <div class="col-md-4">
        <a href="your_orders.html" class="btn w-100">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <i class="fas fa-2x fa-truck"></i>
                <span class="h4"> Delivery</span>
              </div>
              <small class="text-muted">Track orders placed by users.</small>
            </div>
          </div>
        </a>
      </div>

      <div class="col-md-4">
        <a href="/save" class="btn w-100">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <i class="fas fa-2x fa-cart-plus"></i>
                <span class="h4"> Add New Product</span>
              </div>
              <small class="text-muted">Create a new product to sell.</small>
            </div>
          </div>
        </a>
      </div>

      <div class="col-md-4">
        <a href="your_addresses.html" class="btn w-100">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <i class="fas fa-2x fa-user-edit"></i>
                <span class="h4"> Update Account</span>
              </div>
              <small class="text-muted">Edit seller account details.</small>
            </div>
          </div>
        </a>
      </div>
    </div> 
    {/* <!-- Seller Account Panel Starts --> */}

    <div class="row">
      <div class="col-md-4">
        <a href="/productList" class="btn w-100">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <i class="fas fa-2x fa-list-ol"></i>
                <span class="h4"> Product List</span>
              </div>
              <small class="text-muted">Check your all products</small>
            </div>
          </div>
        </a>
      </div>


      <div class="col-md-4">
        <a href="seller_account_intro.html" class="btn w-100">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <i class="fas fa-2x fa-store-alt-slash"></i>
                <span class="h4"> Close Account</span>
              </div>
              <small class="text-muted">Facing losses ? Then close your account.</small>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div> 
  {/* <!-- Your Seller Account Ends --> */}
            </div>
        )
    }
}