import React, { useEffect } from "react";

import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import ScrollReveal from "scrollreveal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "white",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid black",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "black",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "100px",
      duration: 2000,
      mobile: true,
    });
    sr.reveal(`.language-1`, {
      delay: 100,
      origin: "right",
      interval: 100,
    });
    sr.reveal(`#bootcamp`, {
      delay: 300,
      origin: "left",
    });
    sr.reveal(`#wakeTech`, {
      delay: 300,
      origin: "left",
    });
    sr.reveal(`#front-end`, {
      delay: 300,
      origin: "right",
    });
    sr.reveal(`#volunteer`, {
      delay: 300,
      origin: "left",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Experience & Education
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2024
          </Typography>
          <Box component="div" className={classes.timeLineItem} id="bootcamp">
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Quantworks Inc
            </Typography>
            <Typography variant="body1" align="left">
              Software Engineer
            </Typography>
            <br />
            <Typography variant="subtitle1" align="left">
              Currently employed as a Full Stack Developer at Quantworks , where
              I've honed my skills and contributed to numerous projects over the
              past two years.
            </Typography>
            <br />
            <Typography variant="body1" align="left">
              Tools & Languages
            </Typography>
            <br />
            <Box
              component="img"
              className="language-1"
              src="./badges/aws.png"
              alt="pic"
              sx={{ height: 50, width: 50, margin: 5 }}
            />
            <Box
              component="img"
              className="language-1"
              src="./badges/angular.png"
              alt="pic"
              sx={{ height: 50, width: 50, margin: 5 }}
            />
            <Box
              component="img"
              className="language-1"
              src="./badges/chartjs.png"
              alt="pic"
              sx={{ height: 50, width: 50, margin: 5 }}
            />
            <Box
              component="img"
              className="language-1"
              src="./badges/postgres.png"
              alt="pic"
              sx={{ height: 50, width: 50, margin: 5 }}
            />
            <Box
              component="img"
              className="language-1"
              src="./badges/serverless.png"
              alt="pic"
              sx={{ height: 50, width: 50, margin: 5 }}
            />
            <Box
              component="img"
              className="language-1"
              src="./badges/python.png"
              alt="pic"
              sx={{ height: 50, width: 50, margin: 5 }}
            />
            <Box
              component="img"
              className="language-1"
              src="./badges/ag-grid.png"
              alt="pic"
              sx={{ height: 50, width: 50, margin: 5 }}
            />
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2022
          </Typography>

          <Box component="div" className={classes.timeLineItem} id="bootcamp">
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Coding BootCamp at UNC-Chapel Hill
            </Typography>
            <Typography variant="body1" align="left">
              Full Stack Web Developer
            </Typography>
            <br />
            <Typography variant="subtitle1" align="left">
              Full Stack Web Developer, love developing apps and websites with a
              focus on mobile-first design & graduate of the UNC Chapel Hill
              Coding Boot Camp
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Technologies
            </Typography>
            <Typography variant="body1" align="left">
              Tools & Languages
            </Typography>
            <br />
            <br />
            <Box component="div">
              <Box
                component="img"
                className="language-1"
                src="./badges/html.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/css.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/javascript.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/react.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/node.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/express.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/npm.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/api.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/bootstrap.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/jest.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/github.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/jQuery.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/materialize.png"
                alt="pic"
                sx={{ height: 40, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/mongodb.png"
                alt="pic"
                sx={{ width: 70, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/mysql.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/redux1.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/sql.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/vue1.png"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/graphql.svg"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
              <Box
                component="img"
                className="language-1"
                src="./badges/material-ui.svg"
                alt="pic"
                sx={{ height: 50, width: 50, margin: 5 }}
              />
            </Box>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2021
          </Typography>
          <Box component="div" className={classes.timeLineItem} id="wakeTech">
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Wake Tech
            </Typography>
            <Typography variant="body1" align="left">
              CTI-110 Web, Pgm, & Db Foundation at wake tech
            </Typography>
            <br />
            <Typography variant="subtitle1" align="left">
              I learned programming, mark-up language and services on the
              Internet. And topics include standard mark-up language Internet
              services, creating web pages, using search engines, file transfer
              programs, and database design and creation with DBMS products. And
              able to demonstrate knowledge of programming tools, deploy a
              web-site with mark-up tools, and create a simple database table.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2021
          </Typography>
          <Box component="div" className={classes.timeLineItem} id="front-end">
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Front End Web Developer
            </Typography>
            <Typography variant="body1" align="left">
              QMQ Real Estate Inc
            </Typography>
            <br />
            <Typography variant="subtitle1">
              Responsible for implementing visual elements that users see and
              interact within the company's website. Build high-quality mockups
              and design different prototypes. Assisting the web development
              team with all aspects of website and application design. Routinely
              testing and optimizing the company's website for ease of use,
              speed. Collaborating with developers to implement new web
              features. Keeping up-to-date with the latest technology and
              programming trends. Ensuring websites are accessible across many
              platforms, including laptops and smartphones.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem} id="volunteer">
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Web Developer Intern/Volunteer
            </Typography>
            <Typography variant="body1" align="left">
              QMQ Real Estate Inc
            </Typography>
            <br />
            <Typography variant="subtitle1">
              Helped create the user interface and interactive aspects of the
              company's website. Assisted members of the web development team
              who program websites using HTML, CSS, and JavaScript code. Manage
              ongoing web pages. Liaise with the client services team. Assist
              with general web design and web development tasks. Assist Creating
              server accounts.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
// paragraph
export default Resume;
