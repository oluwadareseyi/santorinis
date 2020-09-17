import React from "react";

const Toppings = ({ name, img, id }) => {
  return (
    <div key={name} className={`topping ${name}`}>
      <img src={img} alt={name} />
    </div>
  );
};

export default Toppings;
