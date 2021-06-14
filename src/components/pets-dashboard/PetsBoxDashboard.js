import React from "react";
import "./petsDashboard.css";
function PetsBoxDashboard({ id, img, name, text }) {
  console.log(name);
  return (
    <div className="pet-flex">
      <div className="img-div">
        <img className="img" src={img} alt="" />
      </div>
      <div className="info">
        <div className="change-icons">
          <i class="fas fa-pen fa-2x fachange"></i>
          <i class="fas fa-2x fa-trash fachange"></i>
        </div>
        <h2 className="name">{name}</h2>
        <p className="pet-paragraph">{text}</p>
      </div>
    </div>
  );
}

export default PetsBoxDashboard;
