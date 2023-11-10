import React from "react";

const CardItem = ({ nombre, imagen }) => {
  return (
    <div className="card-item">
      <h2>{nombre} </h2>
      <img src={imagen} />
    </div>
  );
};

export default CardItem;
