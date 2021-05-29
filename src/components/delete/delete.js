import React from "react";
import "./delete.css";
function Delete() {
  return (
    <div className="delete">
        <h1 className="h1-delete">
        Are you sure you want to delete this post?
        </h1>
        
        <button className="btn-delete">
            Yes
        </button>
        <button className="btn-delete">
            No
        </button>

    </div>
  );
}

export default Delete;