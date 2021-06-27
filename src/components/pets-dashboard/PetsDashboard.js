import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "./petsDashboard.css";
import PetsBoxDashboard from "./PetsBoxDashboard.js";
import Post from "../post/post";
import fetchPets from "../../services/fetchPets";
import deletePost from "../../services/deletePost";
import verifyLogin from "../../services/verifyLogin";
import Wait from "../reusable/Wait";

function PetsDashboard({ category }) {
  const [addNew, setAddNew] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(loginVerifyService());
  const [getPets, setPets] = useState([]);
  useEffect(() => {
    async function returnPets() {
      const pets = await fetchPets(category);
      setPets(pets);
    }
    returnPets();
  }, [category, addNew]);

  const handleClick = (e) => {
    setAddNew(!addNew);
  };

  function deletePet(id) {
    setPets(getPets.filter((pet) => pet._id !== id));
    deletePost(id);
  }

  async function loginVerifyService() {
    const res = await verifyLogin();
    setIsLoggedIn(res);
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
        {getPets.length > 0 ? (
          getPets.map((pet) => (
            <PetsBoxDashboard
              key={pet._id}
              id={pet._id}
              img={pet.img}
              name={pet.name}
              text={pet.text}
              deletePet={deletePet}
            />
          ))
        ) : (
          <Wait msg="getting pets" />
        )}
      </div>
      {!isLoggedIn && <Redirect to="/login" />}
    </div>
  );
}

export default PetsDashboard;
