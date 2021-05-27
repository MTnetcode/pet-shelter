import React from "react";
import "./dashboardHeader.css";
function DashboardHeader() {
  return (
    <div className="dashboard">
        <p3 className="logout">Log out</p3>
        <h1 className="h1-dashboard">Dashboard</h1>
        <div className="links-dashboard">
        <ul>
            <li>
                Dogs
              
            </li>
            <li>News</li>
            <li>Cats</li>
            </ul>
        </div>
    </div>
  );
}

export default DashboardHeader;
