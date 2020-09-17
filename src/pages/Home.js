import React from "react";
import { ReactComponent as Cart } from "../assets/images/cart.svg";
import Pizza from "../components/Pizza";

const pizzaArr = [...new Array(10)];

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

        <Pizza />
        <div className="ingredients">
          <div className="ing ing-1"></div>
          <div className="ing ing-2"></div>
          <div className="ing ing-3"></div>
          <div className="ing ing-4"></div>
          <div className="ing ing-5"></div>
          <div className="ing ing-6"></div>
        </div>
      </section>

      <section className="recipes">
        <div className="title">Popular Recipes</div>
        <div className="tabs">
          <div className="tab active">Pizza</div>
          <div className="tab">Sides</div>
          <div className="tab">Chicken</div>
          <div className="tab">Dessert</div>
          <div className="tab">Drinks</div>
        </div>

        <div className="all-pizza">
          {pizzaArr.map((_, i) => (
            <div key={i} className="one-pizza">
              <div className="top">
                <div className="image"></div>
              </div>
              <div className="bottom">
                <div className="details">
                  <div className="pizza-name">Sicilian pizza</div>
                  <div className="time">32mins</div>
                </div>
                <div className="spices">
                  Dough, Mozzarella, Cheddar, Blue, Parmesan
                </div>
                <div className="price">5000NGN</div>
                <div className="cart-button">
                  <Cart />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="all-recipes">
          <div className="line"></div>
          <div className="button">VIEW ALL RECIPES</div>
        </div>
      </section>

      <section className="about-us">
        <div className="left">
          <div className="title">Your Taste Buds Will Be Transformed.</div>
          <div className="sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitaa. Augue
            vivamus sit aliquam in velit volutpat scelerisque at id. Orci cursus
            egestas adipiscing quis id tempus donecc amet. Facilisi malesuada
            curabitur vulputate nulla tortor. vulputate adipiscing diam
            malesuada proin morbi mattiscc vel. Donec sit sed potenti arcu
            feugiat. Mattis libero leopni gravida eget purus in aliquet posuere.
            Scelerisque velocity lobortis posuere libero tincidunt amet.{" "}
          </div>
          <div className="button">ORDER NOW</div>
        </div>
        <div className="right">
          <img
            src="https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600362457/Santorinis/slice_g4bjbv.png"
            alt=""
          />
        </div>
      </section>

      <section className="image-grid">
        <div className="parent-grid">
          <div className="desc">
            <div className="caption">
              Follow Us On Instagram To See Pictures Taken By Our Customers
            </div>
            <div className="link-ig"></div>
          </div>
          <div className="grid"></div>
          <div className="grid"></div>
          <div className="grid"></div>
          <div className="grid"></div>
          <div className="grid"></div>
          <div className="grid"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
