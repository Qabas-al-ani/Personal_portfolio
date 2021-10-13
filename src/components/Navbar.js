import React from "react";
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
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

const Navbar = () => {
  return (
    <Box component="nav">
    <AppBar>
      <Toolbar>
        <IconButton> 
          <ArrowBack />
        </IconButton>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default Navbar;
