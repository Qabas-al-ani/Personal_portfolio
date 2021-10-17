import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import { Link as MaterialLink } from "@material-ui/core";
import Footer from "./Footer";

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
  GitHub,
  LinkedIn,
  WorkSharp,
  CloudDownloadOutlined,
  PhoneEnabledOutlined,
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
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <WorkSharp />,
    listText: "Projects",
    listPath: "/projects",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
  {
    listIcon: <GitHub />,
    listText: "Github",
    listPath: "https://github.com/Qabas-al-ani",
    external: true,
  },
  {
    listIcon: <LinkedIn />,
    listText: "LinkedIn",
    listPath: "https://www.linkedin.com/in/qabas-al-ani-7b858863/",
    external: true,
  },
  {
    listIcon: <CloudDownloadOutlined />,
    listText: "Download My Resume",
    listPath: "./qabas-al-ani-resume.pdf",
    external: true,
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
          <ListItem
            style={{ color: "black" }}
            button
            key={key}
            component={lsItem.external ? MaterialLink : Link}
            to={lsItem.external ? null : lsItem.listPath}
            href={lsItem.external ? lsItem.listPath : null}
            target={lsItem.external ? "_blank" : null}
          >
            <ListItemIcon className={classes.ListItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.ListItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
        <ListItem>
          <ListItemIcon className={classes.ListItem}>
            <PhoneEnabledOutlined />
          </ListItemIcon>
          <listItemText className={classes.ListItem}>
            &nbsp; 919 916 9571
          </listItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "black" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Dehaze style={{ color: "white" }} />
            </IconButton>
            <Typography
              variant="h5"
              style={{ color: "white", marginLeft: "10px" }}
            >
              Qabas Al Ani
            </Typography>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
