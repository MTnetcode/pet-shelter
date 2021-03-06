import React from "react";
import BurgerMenu from "../burger-menu-dashboard/BurgerMenu"
import "./dashboardHeader.css";
import { NavLink} from "react-router-dom";
function DashboardHeader() {
  return (
    <div className="dashboard">
        <p3 className="logout">Log out</p3>
        <div className="container">
          <BurgerMenu/>
          <h1 className="h1-dashboard">Dashboard</h1>
          
        <div className="links-dashboard">
        <ul>
            <li className="li-pets">
            <NavLink activeClassName="active-link" to="/dashboard-dogs">
                Dogs
              </NavLink>
            </li>
            <li className="li-pets">
            <NavLink activeClassName="active-link" to="/dashboard-news">
                News
              </NavLink>
              </li>
            <li className="li-pets">
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

export default DashboardHeader;
