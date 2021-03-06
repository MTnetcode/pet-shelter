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
  const [msg] = useState("You have to log in first");
  const [errorMsg, setErrorMsg] = useState("");

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
    deletePost(id, "pets");
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
      {errorMsg.length > 2 && errorMsg}
      {addNew && (
        <Post
          category={category}
          handleClick={handleClick}
          setAddNew={setAddNew}
          addImg={true}
          where="pets"
          setErrorMsg={setErrorMsg}
        />
      )}
      <div className="pets-dashboard">
        {getPets.length > 0 ? (
          getPets.map((pet) => (
            <PetsBoxDashboard
              key={pet._id}
              id={pet._id}
              img={pet.img}
              name={pet.name}
              text={pet.text}
              deletePost={deletePet}
            />
          ))
        ) : (
          <Wait msg="getting pets" />
        )}
      </div>
      {!isLoggedIn && <Redirect to={{ pathname: "/login", state: { msg } }} />}
    </div>
  );
}

export default PetsDashboard;
