import React, { useState, useEffect } from "react";
import PetsBox from "./PetsBox.js";
import "./pets.css";
import fetchPets from "./fetchPets.js";

function Pets({ category }) {
  const [getPets, setPets] = useState([]);

  useEffect(() => {
    async function returnPets() {
      const pets = await fetchPets(category);
      setPets(pets);
    }
    returnPets();
  }, [category]);

  return (
    <div className="pets">
      {getPets
        ? getPets.map((pet) => (
            <PetsBox
              key={pet._id}
              img={pet.img}
              name={pet.name}
              text={pet.text}
            />
          ))
        : "getting pets from server"}
    </div>
  );
}

export default Pets;
