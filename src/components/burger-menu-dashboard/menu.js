import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./burgerMenuDashboard.css";

const Menu = () => {
  return (
    <div className="fixed">
      <div className="D-nav">
<Link to="/">
          <div className="D-dogatas">Dogatas</div>
        </Link>
        <div className="D-links">
          <ul>

            <li className="D-links">
              <NavLink activeClassName="active-link" to="/dashboard-dogs">
                Dogs
              </NavLink>
            </li>
            <li className="D-links">
              <NavLink activeClassName="active-link" to="/dashboard-news">
                News
              </NavLink>
              </li>
            <li className="D-links">
            <NavLink activeClassName="active-link" to="/dashboard-cats">
              Cats
              </NavLink>
              </li>


          </ul>
        </div>
</div>
    </div>

    
    
  
    
  );
}

export default Menu;