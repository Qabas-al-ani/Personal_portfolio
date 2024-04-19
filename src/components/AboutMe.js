import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
  title: {
    color: "black",
    textAlign: "center",
  },
  subtitle: {
    color: "black",
    marginBottom: "3rem",
    background: "white",
    opacity: "0.8",
    margin: "0 20%",
    padding: "25px",
    borderRadius: "20px",
  },
  aboutMeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.aboutMeContainer}>
        <Typography className={classes.title} variant="h4">
          About Me
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          I have nurtured a keen interest in Computer Science, finding it
          fascinating alongside Communications and Media. The digital age has
          revolutionized our way of life, motivating me to become a part of it.
          The first step of this journey was joining the UNC Chapel Hill Coding
          Bootcamp to gain a relevant qualification. As a child, I was engrossed
          by computer games, which later developed into a passion for
          programming. I love problem-solving, mathematics, and physics, which
          is why I have chosen web development as my future career due to its
          flexibility, innovativeness, and challenging nature. Currently
          employed as a Full Stack Developer at Quantworks, where I've honed my
          skills and contributed to numerous projects over the past two years.
        </Typography>
      </Box>
    </>
  );
};

export default AboutMe;
