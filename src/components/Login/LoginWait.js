import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoginWait = () => {
  return (
    <div className="wait">
      Logging in progress please wait <CircularProgress />
    </div>
  );
};

export default LoginWait;
