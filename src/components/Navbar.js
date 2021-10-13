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
  ListItemIcon,
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
import { ListItemText } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "gray",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.menuSliderContainer} component="div">
        <Avatar className={classes.avatar} src={avatar} alt="Qabas Al Ani" />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key}>
              <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
              <ListItemText primary={lsItem.listText} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box component="nav">
        <AppBar position="static" style={{ background: "gray" }}>
          <Toolbar>
            <IconButton>
              <Dehaze style={{ color: "black" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "black" }}>
              Qabas Al Ani
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
