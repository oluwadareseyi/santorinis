import React, { useRef } from "react";
import { ReactComponent as Cart } from "../assets/images/cart.svg";
import Pizza from "../components/Pizza";

const pizzaArr = [
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600633394/Santorinis/image_26_jdceax.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600442997/Santorinis/image_26-2_hpbuc2.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600442998/Santorinis/image_26-3_jsjfrz.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600442997/Santorinis/image_26-4_eh1fwi.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600633394/Santorinis/image_26_jdceax.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600442997/Santorinis/image_26-2_hpbuc2.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600442998/Santorinis/image_26-3_jsjfrz.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600442997/Santorinis/image_26-4_eh1fwi.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600633394/Santorinis/image_26_jdceax.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600442998/Santorinis/image_26-3_jsjfrz.png",
  },
];

const aboutArr = [
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600639706/Santorinis/Rectangle_51_eszgc8.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600639703/Santorinis/Rectangle_53_rdyzc1.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600639678/Santorinis/Rectangle_54_gr35hq.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600639673/Santorinis/Rectangle_50_vpeqwy.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600639670/Santorinis/Rectangle_52_q7nudv.png",
  },
  {
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600379958/Santorinis/showcase_o45e8u.jpg",
  },
];

const Home = () => {
  const cartRef = useRef();
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
          <div ref={cartRef} className="cart-button">
            <Cart />
          </div>
        </nav>

        <div className="size-title">SELECT YOUR SIZE</div>
        <div className="sizing">
          <div className="size">S</div>
          <div className="size active">M</div>
          <div className="size">L</div>
        </div>

        <Pizza cartRef={cartRef} />
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
          {pizzaArr.map(({ img }, i) => (
            <div key={i} className="one-pizza">
              <div className="top">
                <div
                  style={{ backgroundImage: `url(${img})` }}
                  className="image"
                ></div>
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
            malesuada proin morbi mattiscc vel.
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
            <div className="inner">
              <div className="caption">
                Follow Us On Instagram To See Pictures <br /> Taken By Our
                Customers
              </div>
              <div className="link-ig">
                <i className="fab fa-instagram"></i>
                <div> : @santorins</div>
              </div>
            </div>
          </div>
          {aboutArr.map(({ img }, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${img})` }}
              className="grid"
            ></div>
          ))}
        </div>
      </section>
      <footer>
        <div className="footer-top">
          <div className="left">
            <div className="logo">SANTORINIS</div>
            <div className="copyright">
              Copyright © 2020. LogoIpsum. All rights <br /> reserved.
            </div>
          </div>
          <div className="right">
            <div className="links">
              <p>Services</p>
              <p>Campaigns</p>
              <p>Branding</p>
              <p>Offline</p>
            </div>
            <div className="links">
              <p>About</p>
              <p>Our Story</p>
              <p>Benefits</p>
              <p>Careers</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left">
            <form onSubmit={(e) => e.preventDefault()} className="newsletter">
              <label htmlFor="email">
                Subscribe to our <br /> newsletter
              </label>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Email address"
                  name="email"
                  id="email"
                />
                <button type="submit">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="right"></div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
