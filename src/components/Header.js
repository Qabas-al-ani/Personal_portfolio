import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import avatar from "../avatar.jpg";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title: {
    color: "black",
  },
  subtitle: {
    color: "black",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justifyContent="center">
        <Avatar className={classes.avatar} src={avatar} alt="Qabas Al Ani" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed
          strings={["Qabas Al Ani"]}
          style={{ textShadow: "white 1px 0 10px" }}
          typeSpeed={40}
        />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          style={{ textShadow: "white 1px 0 5px" }}
          strings={[
            "Full Stack Web Developer",
            "Crafting Scalable & High-Performance Applications",
            "Specialized in React, Angular, Python & AWS",
            "Turning Ideas into Modern Web Experiences",
          ]}
          typeSpeed={40}
          backSpeed={20}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
