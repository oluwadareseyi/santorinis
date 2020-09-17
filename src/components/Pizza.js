import React, { useState } from "react";
import Dough from "./Dough";
import DoughItem from "./DoughItem";
import Toppings from "./Toppings";

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
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600383214/Santorinis/pepperoni_1_wtqng9.png",
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
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600383214/Santorinis/pepperoni_1_wtqng9.png",
    name: "chicken",
    dragged: false,
  },
  {
    id: 7,
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600383214/Santorinis/pepperoni_1_wtqng9.png",
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

const Pizza = () => {
  const [toppings, setToppings] = useState(toppingsArr);

  const markDragged = (id) => {
    const otherToppings = toppings.filter((topping) => topping.id !== id);
    const singleTopping = toppings.find((topping) => topping.id === id);
    singleTopping.dragged = true;
    setToppings([singleTopping, ...otherToppings]);
  };
  return (
    <div className="pizza-section">
      <div className="toppings">
        {toppingsArr.map(({ img, name, id }) => (
          <Toppings key={id} name={name} img={img} id={id} />
        ))}
      </div>

      <div className="pizza-container">
        <div className="toppings-title"></div>

        <Dough done={markDragged}>
          {toppings
            .filter((topping) => topping.dragged)
            .map(({ img, name, id }) => (
              <DoughItem key={id} img={img} name={name} id={id} />
            ))}
        </Dough>
      </div>
    </div>
  );
};

export default Pizza;
