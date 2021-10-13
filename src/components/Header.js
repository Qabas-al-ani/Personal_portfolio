import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.jpg";

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Qabas Al Ani" />
      <Typography variant="h4">
        <Typed strings={["Qabas Al Ani"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant="h5">
        <Typed
          strings={["Full Stack Web Deleoper", "MERN Stack"]}
          typeSpeed={40}
          backSpeed={60}
        />
      </Typography>
    </Box>
  );
};

export default Header;
