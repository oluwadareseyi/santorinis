import gsap, { Expo, Power4 } from "gsap";
import React, { useState, useRef } from "react";
import Dough from "./Dough";
import DoughItem from "./DoughItem";
import Toppings from "./Toppings";

const Pizza = () => {
  const toppingsArr = [
    {
      id: 1,
      img:
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600383211/Santorinis/black-olive-topping-trottos_bb5euz.png",
      name: "olives",
      dragged: false,
    },
    {
      id: 2,
      img:
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600442998/Santorinis/39Og090PTke0xJ7gwBqOCg-removebg-preview_qevjgt.png",
      name: "cheese",
      dragged: false,
    },
    {
      id: 3,
      img:
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600383211/Santorinis/red-peppers_1_lgavff.png",
      name: "pepper",
      dragged: false,
    },
    {
      id: 4,
      img:
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600383214/Santorinis/pepperoni_1_wtqng9.png",
      name: "pepperoni",
      dragged: false,
    },
    {
      id: 5,
      img:
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600383213/Santorinis/bacon_1_xozcou.png",
      name: "bacon",
      dragged: false,
    },
    {
      id: 6,
      img:
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600442997/Santorinis/ShreddedChicken_New_1_bmjclu.png",
      name: "chicken",
      dragged: false,
    },
    {
      id: 7,
      img:
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600442997/Santorinis/meatballs_uxzy5z.png",
      name: "beef",
      dragged: false,
    },
    {
      id: 8,
      img:
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600383214/Santorinis/pepperoni_1_wtqng9.png",
      name: "sausage",
      dragged: false,
    },
  ];

  const [toppings, setToppings] = useState(toppingsArr);
  const [showButton, setShowButton] = useState(false);

  const doughComp = useRef();
  const pizzaCon = useRef();

  const markDragged = (id) => {
    const otherToppings = toppings.filter((topping) => topping.id !== id);
    const singleTopping = toppings.find((topping) => topping.id === id);
    singleTopping.dragged = true;
    setToppings([singleTopping, ...otherToppings]);
    setShowButton(true);
  };
  const handleCartMove = () => {
    let dough = doughComp.current;

    let itemToMove = dough.cloneNode(true);
    const style = `
    position: absolute;
    display: flex;
    justify-content: center;
    width: 85%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 0;
    z-index: 500;`;
    itemToMove.style = style;
    let rechange = pizzaCon.current.appendChild(itemToMove);
    setTimeout(() => {
      setToppings(toppingsArr);
      setShowButton(false);
      const tl = gsap.timeline();
      tl.to(itemToMove, {
        duration: 1,
        css: { scale: 0.1 },
        ease: "Power0.easeInOut",
      })
        .to(itemToMove, {
          duration: 1,
          delay: 0.3,
          y: -700,
          x: 450,
          ease: Expo.easeInOut,
        })
        .to(
          itemToMove,
          {
            duration: 1,
            opacity: 0,
            ease: Expo.easeOut,
          },
          "+=.1"
        )
        .to(
          ".cart-button",
          {
            duration: 0.05,
            scale: 1.2,
            ease: Power4.easeOut,
          },
          "-=1"
        )
        .to(".cart-button", {
          duration: 0.05,
          delay: -0.8,
          scale: 1,
          ease: Power4.easeIn,
        });
    }, 200);
    setTimeout(() => {
      rechange.parentNode.removeChild(rechange);
    }, 4000);
  };
  return (
    <div className="pizza-section">
      <div className="toppings">
        {toppingsArr.map(({ img, name, id }) => (
          <Toppings key={id} name={name} img={img} id={id} />
        ))}
      </div>

      <div ref={pizzaCon} className="pizza-container">
        <div className="toppings-title"></div>

        <Dough ref={doughComp} done={markDragged}>
          {toppings
            .filter((topping) => topping.dragged)
            .map(({ img, name, id }) => (
              <DoughItem key={id} img={img} name={name} id={id} />
            ))}
        </Dough>
      </div>

      {showButton && (
        <div onClick={handleCartMove} className="order-button">
          Order Now
        </div>
      )}
    </div>
  );
};

export default Pizza;
