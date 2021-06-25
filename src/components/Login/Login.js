import React, { useState } from "react";
import login from "../../services/login";
import LoginWait from "./LoginWait";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import "./login.css";
import { useEffect } from "react";
function Login() {
  const cookies = new Cookies();
  const [getCredentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [wait, setWait] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...getCredentials, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newForm = new FormData(e.target.form);
    setWait(true);
    let auth = await login(newForm);
    setWait(false);
    setIsAuthenticated(auth);
  };
  useEffect(() => {
    cookies.get("token") && setIsAuthenticated(true);
  }, []);
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
      {wait && <LoginWait />}
      {isAuthenticated && <Redirect to="/dashboard-news" />}
    </div>
  );
}

export default Login;
