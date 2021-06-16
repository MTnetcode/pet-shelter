import React, { useState } from "react";
import login from "../../services/login";
import { Redirect } from "react-router-dom";
import "./login.css";
function Login() {
  const [getCredentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...getCredentials, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newForm = new FormData(e.target.form);
    let auth = await login(newForm);
    console.log(auth);
  };
  return (
    <div className="login">
      <div className="form">
        <h1 className="login-header">Log in form</h1>
        <form name="form">
          <input
            className="login-inp"
            type="email"
            name="username"
            placeholder="Email"
            value={getCredentials.username}
            onChange={handleChange}
          />
          <input
            className="login-inp"
            type="password"
            name="password"
            placeholder="Password"
            value={getCredentials.password}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="login-btn"
            value="Log in"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
