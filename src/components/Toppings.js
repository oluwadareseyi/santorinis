import React from "react";
import { useDrag } from "react-dnd";
import itemTypes from "../utils/itemTypes";

const Toppings = ({ name, img, id }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: itemTypes.TOPPING,
      id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      key={name}
      style={{ backgroundImage: `url(${img})` }}
      className={`topping ${name} ${isDragging ? "dragging" : ""}`}
    ></div>
  );
};

export default Toppings;
