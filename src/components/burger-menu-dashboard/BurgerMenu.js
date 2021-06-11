import React, { useState } from 'react';
import Burger from "./burger"
import Menu from "./menu"

function BurgerMenu() {
  const [open, setOpen] = useState(false);
    return (
      <div>
        <div style={{overflow: 'hidden'}}>
        <Burger open={open} setOpen={setOpen}/>
        { open && <Menu /> }
        </div>


      </div>
    )
  }
  export default BurgerMenu;
  