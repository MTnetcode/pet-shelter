import React from "react";
import SimpleMenu from "../burger-menu/SimpleMenu.js"
import { NavLink, Link } from "react-router-dom";

import "./header.css";
function Header({ image, title, mgTop, love }) {
  let headerImage = {
    backgroundImage: image,
  };

  
  return (
    <header className="header" style={headerImage}>
      <div className="navbar">
        <Link to="/">
          <div className="dogatas">Dogatas</div>
        </Link>

        <div className="links">
          <ul>
            <li>
              <NavLink activeClassName="active-link" to="/about-us">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/dogs">
                Dogs
              </NavLink>
            </li>
            <li>
            <NavLink activeClassName="active-link" to="/cats">
              Cats
              </NavLink>
              </li>

            <li>
              <NavLink activeClassName="active-link" to="/contact">
                Contact
              </NavLink>
              </li>
          </ul>
        </div>
      </div>
      <h1 className="main-header" style={{ marginTop: mgTop }}>
        {title}
      </h1>
      <h5 className="sub-header">{love}</h5>
    </header>
  );
}

export default Header;
