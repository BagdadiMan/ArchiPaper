import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import pictures from "./pictures.js";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%'
  },
  gridList: {
    width: '100%',
    height: '100%'
  }
}));

const Pics = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={700} className={classes.gridList} cols={3}>
      {/*   <GridListTile key={1} cols={1}>
          <img src={Img}/>
        </GridListTile> */}
        {pictures.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Pics;
