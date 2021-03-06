import React from "react";
import "./delete.css";
function Delete({ deletePost, id, setOpenDelete, where }) {
  return (
    <div className="delete">
      <h1 className="h1-delete">Are you sure you want to delete this post?</h1>

      <button
        className="btn-delete"
        onClick={() => {
          deletePost(id, where);
          setOpenDelete(false);
        }}
      >
        Yes
      </button>
      <button
        className="btn-delete"
        onClick={() => {
          setOpenDelete(false);
        }}
      >
        No
      </button>
    </div>
  );
}

export default Delete;
