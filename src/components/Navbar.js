import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  Dehaze,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../avatar.jpg";

const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.menuSliderContainer} component="div">
        <Avatar className={classes.avatar} src={avatar} alt="Qabas Al Ani" />
      </Box>

      <Box component="nav">
        <AppBar position="static" style={{ background: "black" }}>
          <Toolbar>
            <IconButton>
              <Dehaze style={{ color: "gray" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "gray" }}>
              Qabas Al Ani
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
