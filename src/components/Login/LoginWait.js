import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoginWait = () => {
  return (
    <div className="wait">
      <h2>Login in progress please wait</h2> <CircularProgress />
    </div>
  );
};

export default LoginWait;
