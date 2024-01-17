import React from "react";

import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu } from "@mui/material";

import classes from "./style.module.scss";

const index = () => {
  return (
    <>
      <div className={classes["navbar"]}>
        <div className={classes["nav-logo"]}>
            <h1>Delicacy</h1>
        </div>
      </div>
    </>
  );
};

export default index;
