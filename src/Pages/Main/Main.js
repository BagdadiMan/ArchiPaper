import React, { useState, useEffect } from "react";
import "./main.css";
import {
  Link,
  Paper,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  makeStyles,
  CardActions
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import WarningIcon from "@material-ui/icons/Warning";
import ComputerIcon from "@material-ui/icons/Computer";
import ContentRoutes from "../../ContentRoutes.js";

import Image from "./background.gif";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    height: "40vh",
    borderRadius: "0px 0px 20px 20px",
    backgroundSize: "cover"
  }
};

const Main = props => {
  const preventDefault = () => {
    alert("Zohar");
  };

  return (
    <div id="main">
      <Paper style={styles.paperContainer}>
        <Typography color="primary">כותרת</Typography>
      </Paper>
      <Paper className="main-tabs" style={{ backgroundColor: "transparent" }}>
        <Button
          onClick={() => props.setContent(ContentRoutes.CommonProblems)}
          variant="contained"
          className="tab-button"
          startIcon={<WarningIcon />}
        >
          תקלות נפוצות
        </Button>
        <Button
          variant="contained"
          className="tab-button"
          startIcon={<ComputerIcon />}
        >
          Tech Picks
        </Button>
        <Button
          variant="contained"
          className="tab-button"
          startIcon={<DeleteIcon />}
        >
          כפתור
        </Button>
      </Paper>
    </div>
  );
};

export default Main;
