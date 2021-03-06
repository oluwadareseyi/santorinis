import React from "react";

const DoughItem = ({ name, img, id }) => {
  return (
    <div
      key={name}
      className={`item ${name}`}
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
};

export default DoughItem;
