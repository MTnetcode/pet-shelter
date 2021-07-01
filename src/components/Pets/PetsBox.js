import React, { useState } from "react";
import "./pets.css";
import PetsInfo from "../pets-info/petsInfo";
function PetsBox({ id, img, name, text }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="pet-flex">
      {showInfo && (
        <PetsInfo img={img} name={name} text={text} setShowInfo={setShowInfo} />
      )}
      <div className="img-div">
        <img className="img" src={img} alt="" />
      </div>
      <div className="info">
        <h2 className="name">{name}</h2>
        <p className="pet-paragraph">
          {text.slice(0, 200)}...
          <em
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            more
          </em>{" "}
        </p>
      </div>
    </div>
  );
}

export default PetsBox;
