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
        <Typography className={classes.subtitle} variant="body1" paragraph>
          I’ve always been fascinated by the intersection of technology and
          communication. What began as a childhood curiosity—spending hours
          immersed in computer games— evolved into a passion for building
          digital experiences.
        </Typography>
        <Typography className={classes.subtitle} variant="body1" paragraph>
          My journey into software development started with the UNC Chapel Hill
          Coding Bootcamp, where I gained hands-on training in full stack web
          development. With a strong foundation in problem-solving, mathematics,
          and physics, I found web development to be the perfect blend of
          creativity, logic, and innovation.
        </Typography>
        <Typography className={classes.subtitle} variant="body1" paragraph>
          Today, I work as a Full Stack Developer at Quantworks, where I’ve had
          the opportunity to contribute to impactful, scalable projects across
          diverse tech stacks. I'm driven by the ever-changing nature of the
          digital world and motivated by the challenge of turning complex
          problems into elegant, user-friendly solutions.
        </Typography>
      </Box>
    </>
  );
};

export default AboutMe;
