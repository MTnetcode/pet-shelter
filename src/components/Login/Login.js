import React, { useState } from "react";
import login from "../../services/login";
import verifyLogin from "../../services/verifyLogin";
import Wait from "../reusable/Wait";
import { Redirect, useLocation } from "react-router-dom";
import "./login.css";
import Warning from "./Warning";
import { useEffect } from "react";
function Login(props) {
  let location = useLocation();
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
    async function loginVerifyService() {
      const res = await verifyLogin();
      setIsAuthenticated(res);
    }
    loginVerifyService();
  }, []);
  return (
    <div className="login">
      <div className="form">
        {location.state?.msg && <Warning text={location.state.msg} />}
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
      {wait && <Wait msg="Login" />}
      {isAuthenticated && <Redirect to="/dashboard-news" />}
    </div>
  );
}

export default Login;
