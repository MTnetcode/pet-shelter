import React, { useState, useEffect } from "react";
import PetsBox from "./PetsBox.js";
import "./pets.css";
import { petsList as pets } from "../../pets.js";

function Pets({ category }) {
  const [getAnimals, setAnimals] = useState([]);

  useEffect(() => {
    function getList(pets) {
      return pets.filter((pet) => pet.category === category);
    }
    setAnimals(getList(pets));
  }, [category]);

  return (
    <div className="pets">
      {getAnimals.map((pet) => (
        <PetsBox img={pet.img} name={pet.name} text={pet.text} />
      ))}

    </div>
  );
}

export default Pets;
