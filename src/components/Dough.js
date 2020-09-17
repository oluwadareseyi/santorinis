import React from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../utils/itemTypes";
const Dough = ({ children, done }) => {
  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.TOPPING,
    drop: (item, monitor) => done(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div
      ref={drop}
      className={`dough-container ${isOver ? "scale-dough" : ""}`}
    >
      <div className="dough-items">{children}</div>
    </div>
  );
};

export default Dough;
