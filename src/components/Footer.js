import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {LinkedIn} from "@material-ui/icons";
import {GitHub} from "@material-ui/icons";
import {AddIcCall} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "gray",
      "&:hover": {
        fill: "tan",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {

  const classes = useStyles();

  return (
    <BottomNavigation width="auto" style={{background:'#222'}}>
      <BottomNavigationAction href="https://www.linkedin.com/in/qabas-al-ani-7b858863/" target="_blank"
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedIn/>}
      />
      <BottomNavigationAction href="https://github.com/Qabas-al-ani" target="_blank"
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHub/>}
      />
        <BottomNavigationAction href="tel:919-916-9571"
        className={classes.root}
        style={{ padding: 0 }}
        icon={<AddIcCall/>}
      />
    </BottomNavigation>
  );
};

export default Footer;
