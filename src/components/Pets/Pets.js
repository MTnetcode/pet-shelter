import React, { useState, useEffect } from "react";
import PetsBox from "./PetsBox.js";
import "./pets.css";
import fetchPets from "./fetchPets.js";

function Pets({ category }) {
  const [getAnimals, setAnimals] = useState([]);

  useEffect(() => {}, [category]);

  return (
    <div className="pets">
      {getAnimals.map((pet) => (
        <PetsBox img={pet.img} name={pet.name} text={pet.text} />
      ))}
    </div>
  );
}

export default Pets;
