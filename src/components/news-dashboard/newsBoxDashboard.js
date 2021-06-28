import React, { useState } from "react";
import Delete from "../delete/delete";

const NewsBoxDashboard = ({ id, title, text, deletePost }) => {
  const [openDelete, setOpenDelete] = useState(false);
  return (
    <div className="box">
      <div className="change">
      <i class="fas fa-pen fa-2x fachange"></i>
      <i
        class="fas fa-2x fa-trash fachange"
        onClick={() => {
          setOpenDelete(true);
        }}
      ></i></div>
      <h2 className="news-header">{title}</h2>
      <p className="news-paragraph">{text}</p>
      {openDelete && (
        <Delete
          deletePost={deletePost}
          id={id}
          setOpenDelete={setOpenDelete}
          where="pets"
        />
      )}
    </div>
  );
};

export default NewsBoxDashboard;
