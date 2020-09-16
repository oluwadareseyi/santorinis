import React from "react";
import { ReactComponent as Cart } from "../assets/images/cart.svg";

const Home = () => {
  return (
    <div className="landing">
      <section className="hero">
        <nav className="main-nav">
          <div className="logo">SANTORINIS</div>
          <div className="nav-items">
            <div className="nav-item">Home</div>
            <div className="nav-item">About Us</div>
            <div className="nav-item">Our Menu</div>
            <div className="nav-item">Contact Us</div>
          </div>
          <div className="cart-button">
            <Cart />
          </div>
        </nav>

        <div className="size-title">SELECT YOUR SIZE</div>
        <div className="sizing">
          <div className="size">S</div>
          <div className="size active">M</div>
          <div className="size">L</div>
        </div>

        <div className="pizza-container"></div>
        <div className="ingredients">
          <div className="ing ing-1"></div>
          <div className="ing ing-2"></div>
          <div className="ing ing-3"></div>
          <div className="ing ing-4"></div>
          <div className="ing ing-5"></div>
          <div className="ing ing-6"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
