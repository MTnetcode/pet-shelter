import React from "react";
import "./petsDashboard.css";
function PetsBoxDashboard() {
  return (
   
      <div className="pet-flex">
        <div className="img-div">
          <img className="img" src="/images/janice-dog.svg" alt="" />
        </div>
        <div className="info">
            <div className="change-icons">
            <i class="fas fa-pen fa-2x fachange"></i>
          <i class="fas fa-2x fa-trash fachange"></i>
            </div>
          <h2 className="name">Janice</h2>
          <p className="pet-paragraph">
            Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus
            sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit,
            hendrerit erat a, ultricies velit. Praesent convallis in lorem nec
            blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim.
            Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.
          </p>
        </div>
      </div>
  );
}

export default PetsBoxDashboard;