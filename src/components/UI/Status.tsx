import React, { useEffect } from "react";
import { getAll } from "../../api/product";

import classes from "./Status.module.css";
function Status({ children }) {
  useEffect(() => {}, []);

  return (
    <div>
      <button className={classes.btn}>{children}</button>
    </div>
  );
}

export default Status;
