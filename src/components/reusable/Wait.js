import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoginWait = ({ msg }) => {
  return (
    <div className="wait">
      <h2>{msg} in progress please wait</h2> <CircularProgress />
    </div>
  );
};

export default LoginWait;
