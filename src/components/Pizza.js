import React, { useState } from "react";
import Dough from "./Dough";
import DoughItem from "./DoughItem";
import Toppings from "./Toppings";

const toppingsArr = [
  {
    id: 1,
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600282622/Santorinis/pepperoni_av3xgp.png",
    name: "olives",
    dragged: false,
  },
  {
    id: 2,
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600282622/Santorinis/pepperoni_av3xgp.png",
    name: "cheese",
    dragged: false,
  },
  {
    id: 3,
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600282622/Santorinis/pepperoni_av3xgp.png",
    name: "pepper",
    dragged: false,
  },
  {
    id: 4,
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600282622/Santorinis/pepperoni_av3xgp.png",
    name: "pepperoni",
    dragged: false,
  },
  {
    id: 5,
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600294730/Santorinis/bacon_zjpqid.png",
    name: "bacon",
    dragged: false,
  },
  {
    id: 6,
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600282622/Santorinis/pepperoni_av3xgp.png",
    name: "chicken",
    dragged: false,
  },
  {
    id: 7,
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600282622/Santorinis/pepperoni_av3xgp.png",
    name: "beef",
    dragged: false,
  },
  {
    id: 8,
    img:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600282622/Santorinis/pepperoni_av3xgp.png",
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
