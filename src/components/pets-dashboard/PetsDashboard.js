import React from "react";
import "./petsDashboard.css";
import PetsBoxDashboard from "./PetsBoxDashboard.js";
import Post from "../post/post";
function PetsDashboard({ category }) {
  return (
    <div>
      <div className="plus">
        <i class="fas fa-plus"></i>
      </div>
      <Post category={category} />
      <div className="pets">
        <PetsBoxDashboard />
        <PetsBoxDashboard />
      </div>
    </div>
  );
}

export default PetsDashboard;
