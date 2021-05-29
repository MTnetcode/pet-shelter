import React from "react";
import "./pets.css";
function PetsBox({ id, img, name, text }) {
  return (
    <div className="pet-flex">
      <div className="img-div">
        <img className="img" src={img} alt="" />
      </div>
      <div className="info">
        <h2 className="name">{name}</h2>
        <p className="pet-paragraph">
          {text.slice(0, 200)}...
          <em>more</em>{" "}
        </p>
      </div>
    </div>
  );
}

export default PetsBox;
