import React from "react";
import { useState } from "react";
import Delete from "../delete/delete";
import "./petsDashboard.css";
function PetsBoxDashboard({ id, img, name, text, deletePet }) {
  const [openDelete, setOpenDelete] = useState(false);
  return (
    <div className="pet-flex">
      <div className="img-div">
        <img className="img" src={img} alt="" />
      </div>
      <div className="info">
        <div className="change-icons">
          <i class="fas fa-pen fa-2x fachange"></i>
          <i
            class="fas fa-2x fa-trash fachange"
            onClick={() => {
              setOpenDelete(true);
            }}
          ></i>
        </div>
        <h2 className="name">{name}</h2>
        <p className="pet-paragraph">{text}</p>
      </div>
      {openDelete && (
        <Delete
          deletePost={deletePet}
          id={id}
          setOpenDelete={setOpenDelete}
          where="pets"
        />
      )}
    </div>
  );
}

export default PetsBoxDashboard;
