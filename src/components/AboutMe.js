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
          I'm a Full Stack Web Developer with a strong foundation in both
          front-end and back-end technologies, passionate about building clean,
          scalable, and impactful digital solutions.
        </Typography>
        <Typography className={classes.subtitle} variant="body1" paragraph>
          After completing the Full Stack Web Development Bootcamp at UNC Chapel
          Hill, I dove headfirst into the tech industry—drawing on my background
          in mathematics, logic, and design to quickly grow as a developer.
        </Typography>
        <Typography className={classes.subtitle} variant="body1" paragraph>
          For the past two years, I've worked at Quantworks, contributing to
          cloud-based, serverless applications using technologies like React,
          Angular, Python, Node.js, and AWS. I've led front-end architecture on
          several projects and collaborated closely with cross-functional teams
          to deliver efficient, user-focused solutions.
        </Typography>
        <Typography className={classes.subtitle} variant="body1" paragraph>
          I'm always eager to take on new challenges and expand my
          expertise—especially in fast-paced, collaborative environments where I
          can create meaningful impact through clean code and thoughtful design.
        </Typography>
      </Box>
    </>
  );
};

export default AboutMe;
