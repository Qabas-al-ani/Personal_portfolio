import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
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
    height: "100%",
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
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = slider => (
    <Box 
    className={classes.menuSliderContainer} 
    component="div"
    onClick={toggleSlider(slider, false)}
    
    >
      <Avatar className={classes.avatar} src={avatar} alt="Qabas Al Ani" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.ListItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.ListItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "gray" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Dehaze style={{ color: "black" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "black" }}>
              Qabas Al Ani
            </Typography>
            <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
