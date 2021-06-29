import React from "react";
import { NavLink } from "react-router-dom";
import "./petsInfo.css";
function PetsInfo({ img, name, text, setShowInfo }) {
  return (
    <div className="info-box">
      <div className="photo">
        <i
          class="fas fa-times fa-2x"
          onClick={() => {
            setShowInfo(false);
          }}
        ></i>
        <img className="i1" src={img} alt="" />
      </div>
      <div className="information">
        <h3 className="name">{name}</h3>
        <p className="p">{text}</p> <br />
        <NavLink activeClassName="link" to="/about-us">
          <strong className="p">
            If you are interest please check terms of adoption
          </strong>
        </NavLink>
      </div>
    </div>
  );
}

export default PetsInfo;
