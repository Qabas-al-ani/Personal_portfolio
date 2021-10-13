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
  Dehaze,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

const Navbar = () => {
  return (
    <Box component="nav">
      <AppBar style={{ background: "black" }}>
        <Toolbar>
          <IconButton>
            <Dehaze style={{ color: "gray" }} />
          </IconButton>
          <Typography variant="h5" style={{ color: "gray" }} >
            Qabas Al Ani
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
