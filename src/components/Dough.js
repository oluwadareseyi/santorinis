import React, { useEffect, useState, forwardRef } from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../utils/itemTypes";

const Dough = forwardRef(({ children, done }, ref) => {
  const [{ isOver, isDrop }, drop] = useDrop({
    accept: itemTypes.TOPPING,
    drop: (item, monitor) => done(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      isDrop: !!monitor.didDrop(),
    }),
  });

  const [dropAnim, setDropAnim] = useState(false);

  useEffect(() => {
    console.log("rendering...");
    const dropAnimation = () => {
      setDropAnim(true);
      setTimeout(() => {
        setDropAnim(false);
      }, 1000);
    };
    isDrop && dropAnimation();
  }, [isDrop]);

  return (
    <div
      className={`dough-component ${dropAnim ? "drop-anim" : ""} ${
        isOver ? "scale-dough" : ""
      }`}
      ref={ref}
    >
      <div ref={drop} className={`dough-container `}>
        <div className="dough-items">{children}</div>
      </div>
    </div>
  );
});

export default Dough;
