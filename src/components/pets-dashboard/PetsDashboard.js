import React, { useEffect, useState } from "react";
import "./petsDashboard.css";
import PetsBoxDashboard from "./PetsBoxDashboard.js";
import Post from "../post/post";
import fetchPets from "../Pets/fetchPets";

function PetsDashboard({ category }) {
  const [getPets, setPets] = useState([]);
  useEffect(() => {
    async function returnPets() {
      const pets = await fetchPets(category);
      setPets(pets);
    }
    returnPets();
  }, [category]);
  return (
    <div>
      <div className="plus">
        <i class="fas fa-plus"></i>
      </div>
      <Post category={category} />
      <div className="pets">
        {getPets.length > 0
          ? getPets.map((pet) => (
              <PetsBoxDashboard
                key={pet._id}
                id={pet._id}
                img={pet.img}
                name={pet.name}
                text={pet.text}
              />
            ))
          : "getting pets from server"}
      </div>
    </div>
  );
}

export default PetsDashboard;
