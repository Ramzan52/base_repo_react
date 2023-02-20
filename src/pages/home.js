import React from "react";
import Header from "../components/header";
import '../styles/home.css'

export default function Home() {
  return (
    <div>
      <Header />
      <div class="row">
        <div class="column">
          <div class="card">
            <img
              src="https://via.placeholder.com/200x200.png?text=Product+1"
              alt="Product 1"
            />
            <h3>Product 1</h3>
            <p>$10.99</p>
            <button class="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img
              src="https://via.placeholder.com/200x200.png?text=Product+2"
              alt="Product 2"
            />
            <h3>Product 1</h3>
            <p>$10.99</p>
            <button class="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
