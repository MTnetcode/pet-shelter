import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./petsInfo.css"
function PetsInfo() {

  return (
      <div className="info-box">

        <div className="photo">
        <i class="fas fa-times fa-2x"></i> 
        <img className="i1"  src="/images/janice-dog.svg" alt="" />
        <img className="i2" src="/images/janice-dog2.svg" alt="" />
        <img className="i3" src="/images/janice-dog3.svg" alt="" />
        </div>
        <div className="information">
          <h3 className="name">Janice</h3>
          <p className="p">Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.
Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.

</p> <br />
<NavLink activeClassName="link" to="/about-us">
  <strong className="p">If you are interest please check terms of adoption</strong>
</NavLink>
                
              

      </div>
        </div>

  );
}

export default PetsInfo;