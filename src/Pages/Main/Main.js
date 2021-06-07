import React, { useState, useEffect, useRef } from "react";
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
  CardActions,
  Avatar
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import WarningIcon from "@material-ui/icons/Warning";
import ComputerIcon from "@material-ui/icons/Computer";
import ContentRoutes from "../../ContentRoutes.js";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import CloudIcon from "@material-ui/icons/Cloud";
import presentationTemplate from "./presentationTemplate.pptx";
import Image from "./background.gif";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Content from "../../Components/Content/Content.js";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    height: "30%",
    borderRadius: "0px 0px 20px 20px",
    backgroundSize: "cover",
    justifyContent: "flex-start",
    textAlign: "center",
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center'
  }
};

const Main = () => {

  const [contentRoute, setContentRoute] = useState();
  const ref = useRef(null);

  const downloadPresentationTemplate = () => {
    var a = document.createElement("a");
    a.href = presentationTemplate;
    a.setAttribute("download", "Template.pptx");
    a.click();
  };

  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div id="main">
      <Paper style={styles.paperContainer}>
        <Typography className="title">רסיסי לילה</Typography>
        <Typography className="sub-title">העתיד שלכם בידיים שלנו • השלמה טכנולוגית 005</Typography>
      </Paper>
      <Paper className="main-tabs" style={{ backgroundColor: "transparent" }}>
        <Avatar onClick={() => scroll(50)} className="arrow">
          <ArrowForwardIosIcon />
        </Avatar>
        <div className="buttons-div" ref={ref}>
          <Button
            onClick={() => setContentRoute(ContentRoutes.CommonProblems)}
            variant="contained"
            className="tab-button"
            startIcon={<WarningIcon fontSize={"large"} />}
          >
            תקלות נפוצות
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1dzMq9IlfoiEwfWXEqZOIUW5zJNtiQwgg?usp=sharing"
              )
            }
            variant="contained"
            className="tab-button"
            startIcon={<CloudIcon />}
          >
            מדריכי Openshift
          </Button>
          <Button
            onClick={downloadPresentationTemplate}
            variant="contained"
            className="tab-button"
            startIcon={<SlideshowIcon />}
          >
            פורמט הצגות
          </Button>
          {/*<Button
            onClick={() => setContentRoute(null)}
            variant="contained"
            className="tab-button"
            startIcon={<RecentActorsIcon />}
          >
            הצוות
          </Button>
          <Button
            onClick={() => setContentRoute(null)}
            variant="contained"
            className="tab-button"
            startIcon={<RecentActorsIcon />}
          >
            מערכות
          </Button>
          <Button
            onClick={() => setContentRoute(null)}
            variant="contained"
            className="tab-button"
            startIcon={<RecentActorsIcon />}
          >
            מערכות
          </Button>*/}
        </div>
        <Avatar onClick={() => scroll(-50)} className="arrow">
          <ArrowBackIosIcon />
        </Avatar>
      </Paper>

      <Content contentRoute={contentRoute}></Content>
    </div>
  );
};

export default Main;
