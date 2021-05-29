import React from "react";
import "./petsDashboard.css";
import PetsBoxDashboard from "./PetsBoxDashboard.js"
function PetsDashboard() {
  return (
    <div>
            <div className="plus">
            <i class="fas fa-plus"></i>
      </div>
      <div className="pets">

      <PetsBoxDashboard />
      <PetsBoxDashboard />
    </div>
    </div>

  );
}

export default PetsDashboard;
