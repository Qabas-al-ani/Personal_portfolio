import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.jpg";

const Header = () => {
  return (
    <Box>
      <Typography variant="h4">
        <Typed strings={["Qabas Al Ani"]} typeSpeed={90} />
      </Typography>
      <Avatar src={avatar} alt="Qabas Al Ani" />
    </Box>
  );
};

export default Header;
