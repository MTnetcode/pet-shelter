import React from "react";
import { useState } from "react";
import Delete from "../delete/delete";
import Change from "../change/change"
import "./petsDashboard.css";
function PetsBoxDashboard({ id, img, name, text, deletePost }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEditBox, setOpenEditBox] = useState(false)
  return (
    <div className="pet-flex">
      <div className="img-div">
        <img className="img" src={img} alt="" />
      </div>
      <div className="info">
        <div className="change-icons">
          <i class="fas fa-pen fa-2x fachange" onClick={() => setOpenEditBox(true)}></i>
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
          deletePost={deletePost}
          id={id}
          setOpenDelete={setOpenDelete}
          where="pets"
        />
      )}
  {openEditBox && <Change setOpenEditBox={setOpenEditBox} id={id} name={name} text={text} />}
    </div>
  );
}

export default PetsBoxDashboard;
