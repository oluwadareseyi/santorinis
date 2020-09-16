import React from "react";
import Dough from "./Dough";
import Toppings from "./Toppings";

const Pizza = () => {
  return (
    <div className="pizza-section">
      <Dough />
      <Toppings />
    </div>
  );
};

export default Pizza;
