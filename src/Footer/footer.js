import React from "react";
import "./footer.css";
function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-p">© MTnetcode {year}</p>
      <div className="social">
        <i className="fab fa-instagram fa-2x"></i>
        <i className="fab fa-twitter fa-2x"></i>
        <i className="fab fa-facebook-f fa-2x"></i>
      </div>
    </footer>
  );
}

export default Footer;
