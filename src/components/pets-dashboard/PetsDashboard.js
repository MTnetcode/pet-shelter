import React from "react";
import "./petsDashboard.css";
import PetsBoxDashboard from "./PetsBoxDashboard.js"
function PetsDashboard() {
  return (
    <div className="pets">
      <PetsBoxDashboard />
      <PetsBoxDashboard />
    </div>
  );
}

export default PetsDashboard;
