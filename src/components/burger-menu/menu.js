import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./burgerMenu.css";

const Menu = ({ setOpen }) => {
  return (
    <div className="fixed">
      <div className="B-nav">
        <Link to="/">
          <div className="B-dogatas">Dogatas</div>
        </Link>
        <div className="B-links">
          <ul>
            <li className="B-links" onClick={() => setOpen(false)}>
              <NavLink activeClassName="active-link" to="/about-us">
                About us
              </NavLink>
            </li>
            <li className="B-links" onClick={() => setOpen(false)}>
              <NavLink activeClassName="active-link" to="/dogs">
                Dogs
              </NavLink>
            </li>
            <li className="B-links" onClick={() => setOpen(false)}>
              <NavLink activeClassName="active-link" to="/cats">
                Cats
              </NavLink>
            </li>

            <li className="B-links" onClick={() => setOpen(false)}>
              <NavLink activeClassName="active-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
