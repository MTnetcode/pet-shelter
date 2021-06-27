import React, { useEffect, useState } from "react";
import "./petsDashboard.css";
import PetsBoxDashboard from "./PetsBoxDashboard.js";
import Post from "../post/post";
import fetchPets from "../../services/fetchPets";
import deletePost from "../../services/deletePost";

function PetsDashboard({ category }) {
  const [addNew, setAddNew] = useState(false);
  const [getPets, setPets] = useState([]);
  useEffect(() => {
    async function returnPets() {
      const pets = await fetchPets(category);
      setPets(pets);
    }
    returnPets();
  }, [category]);
  const handleClick = (e) => {
    setAddNew(!addNew);
  };
  function deletePet(id) {
    setPets(getPets.filter((pet) => pet._id !== id));
    deletePost(id);
  }
  return (
    <div>
      <div className="plus" onClick={handleClick}>
        <i class="fas fa-plus"></i>
      </div>
      {addNew && (
        <Post
          category={category}
          handleClick={handleClick}
          setAddNew={setAddNew}
        />
      )}
      <div className="pets">
        {getPets.length > 0
          ? getPets.map((pet) => (
              <PetsBoxDashboard
                key={pet._id}
                id={pet._id}
                img={pet.img}
                name={pet.name}
                text={pet.text}
                deletePet={deletePet}
              />
            ))
          : "getting pets from server"}
      </div>
    </div>
  );
}

export default PetsDashboard;
