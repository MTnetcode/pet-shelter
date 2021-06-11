import React from 'react';
import "./burgerMenu.css";

const Burger = ({ open, setOpen }) => {
  return (
   <div className="containerBurger" onClick={() => setOpen(!open)}>
       <div className="divBurger" />
      <div  className="divBurger"/>
      <div  className="divBurger"/>
     
   </div>
 
   
  )
}

export default Burger;

