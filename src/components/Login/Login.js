import React from "react";
import "./login.css"
function Login() {

  return (
      <div className="login">
          <div className="form">
            <h1 className="login-header">Log in form</h1>
          <input className="login-inp" type="email" placeholder="Email" />
          <input className="login-inp" type="password" placeholder="Password" />
          <button className="login-btn">Log in</button>
          </div>

      </div>
  );
}

export default Login;