import React from 'react';
import "./burgerMenuDashboard.css";

const Burger = ({ open, setOpen }) => {
  return (
   <div className="DBurger" onClick={() => setOpen(!open)}>
       <div className="divBurger" />
      <div  className="divBurger"/>
      <div  className="divBurger"/>
     
   </div>
 
   
  )
}

export default Burger;

