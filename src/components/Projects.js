import React, { useEffect } from "react";
import Navbar from "./Navbar";

import projectComic from "../my-projects/comic.jpg";
import projectStore from "../my-projects/Shop.png";
import projectBook from "../my-projects/book.png";
import project1 from "../my-projects/pro2.png";
import project2 from "../my-projects/tech-blog.png";
import project3 from "../my-projects/t4 (1).png";
import project4 from "../my-projects/e-commerce1 (1).gif";
import project6 from "../my-projects/project-2.png";
import { GitHub, TvSharp } from "@material-ui/icons";

import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ScrollReveal from "scrollreveal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContainer: {
    background: "url(backgound-img.jpg) no-repeat center center fixed",
    height: "100%",
  },
  cardContainer: {
    maxWidth: "345",
    margin: "3rem 5rem auto",
  },
});

const Projects = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "100px",
      duration: 1000,
      mobile: true,
    });
    sr.reveal(`#project-comic`, {
      delay: 100,
      origin: "left",
      interval: 100,
    });
    sr.reveal(`#project-redux`, {
      delay: 100,
      origin: "right",
      interval: 100,
    });
    sr.reveal(`#project-book`, {
      delay: 200,
      origin: "left",
      interval: 100,
    });
    sr.reveal(`#project-1`, {
      delay: 200,
      origin: "right",
      interval: 100,
    });
    sr.reveal(`#project-2`, {
      delay: 300,
      origin: "left",
      interval: 100,
    });
    sr.reveal(`#project-3`, {
      delay: 300,
      origin: "right",
      interval: 100,
    });
    sr.reveal(`#project-4`, {
      delay: 400,
      origin: "left",
      interval: 100,
    });

    sr.reveal(`#project-6`, {
      delay: 400,
      origin: "right",
      interval: 100,
    });
  }, []);

  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justifyContent="center">
        {/* Project-comic-space */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} id="project-comic">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project comic space"
                width="100%"
                height="350"
                image={projectComic}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Comic Space
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  Comic Space is a social media application that leverages the
                  Marvel Comics API to help users create a digital comic book
                  collection, and wishlist. It also includes and e-commerce
                  marketplace, so users can buy, sell, and trade comics.
                  <br />
                  <br />
                  <br />
                  <Typography variant="h6" style={{ color: "black" }}>
                    Technologies:
                  </Typography>
                  <Box component="div">
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
                      src="./badges/graphql.svg"
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
                      src="./badges/material-ui.svg"
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
                  </Box>
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/jbramirez03/Comic-Space"
                    target="_blank"
                  >
                    <GitHub style={{ marginRight: 5 }} />
                    GitHub
                  </Button>
                  {/* <Button
                    size="small"
                    color="primary"
                    href="https://young-hollows-20691.herokuapp.com/"
                    target="_blank"
                  >
                    <TvSharp style={{ marginRight: 5 }} /> Demo
                  </Button> */}
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Project-redux-store*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} id="project-redux">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project store"
                width="100%"
                height="350"
                image={projectStore}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Redux Shopping Store
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  An e-commerce app that allows users to go online and shop
                  whatever they like they just have to be logged in and they can
                  click on the product increase the quantity or decrease it and
                  then they can pay with their cards check out their purchases
                  and see their order historyThis application is built using
                  Html, Css, Javascript, Node.js, GraphQL, Apollo Server,
                  MongoDB and it is using React for the front end and Redux for
                  state management.
                  <br />
                  <Typography variant="h6" style={{ color: "black" }}>
                    Technologies:
                  </Typography>
                  <Box component="div">
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
                      src="./badges/graphql.svg"
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
                      src="./badges/mongodb.png"
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
                  </Box>
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/Qabas-al-ani/Redux-Shopping-Store"
                    target="_blank"
                  >
                    <GitHub style={{ marginRight: 5 }} />
                    GitHub
                  </Button>
                  {/* <Button
                    size="small"
                    color="primary"
                    href="https://grim-cat-76535.herokuapp.com/"
                    target="_blank"
                  >
                    <TvSharp style={{ marginRight: 5 }} /> Demo
                  </Button> */}
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Project-Google-book */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} id="project-book">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project book"
                width="100%"
                height="350"
                image={projectBook}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Google Search Book MERN
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  A fully functional google search engine book it was created
                  with Restful API and i refactored it to the GraphQL built with
                  Apollo server with the use of the MERN stack with react front
                  end MongoDB database, Node.js, Express and API
                  <br />
                  <br />
                  <Typography variant="h6" style={{ color: "black" }}>
                    Technologies:
                  </Typography>
                  <Box component="div">
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
                      src="./badges/graphql.svg"
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
                      src="./badges/material-ui.svg"
                      alt="pic"
                      sx={{ height: 50, width: 50, margin: 5 }}
                    />

                    <Box
                      component="img"
                      className="language-1"
                      src="./badges/mongodb.png"
                      alt="pic"
                      sx={{ height: 50, width: 50, margin: 5 }}
                    />
                  </Box>
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/Qabas-al-ani/Google-Search-Book-MERN"
                    target="_blank"
                  >
                    <GitHub style={{ marginRight: 5 }} />
                    GitHub
                  </Button>
                  {/* <Button
                    size="small"
                    color="primary"
                    href="https://afternoon-island-53749.herokuapp.com/"
                  >
                    <TvSharp style={{ marginRight: 5 }} /> Demo
                  </Button> */}
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Project-1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} id="project-1">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                width="100%"
                height="350"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Rehab-Connect
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  A rehab website intended for former addicts to be able to
                  connect with others and build relationships through posting to
                  different milestones on the site.
                  <br />
                  <br />
                  <br />
                  <Typography variant="h6" style={{ color: "black" }}>
                    Technologies:
                  </Typography>
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
                      src="./badges/bootstrap.png"
                      alt="pic"
                      sx={{ height: 50, width: 50, margin: 5 }}
                    />
                    <Box
                      component="img"
                      className="language-1"
                      src="./badges/mysql.png"
                      alt="pic"
                      sx={{ height: 50, width: 50, margin: 5 }}
                    />
                  </Box>
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/jbramirez03/Rehab-Connect"
                    target="_blank"
                  >
                    <GitHub style={{ marginRight: 5 }} />
                    GitHub
                  </Button>
                  {/* <Button
                    size="small"
                    color="primary"
                    href="https://warm-hamlet-41451.herokuapp.com/"
                    target="_blank"
                  >
                    <TvSharp style={{ marginRight: 5 }} /> Demo
                  </Button> */}
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Project-2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} id="project-2">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 2"
                width="100%"
                height="350"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Tech Blog
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  This is a back end and front end project that allows users to
                  post about whatever they wish. It supports account creation
                  with secure password hashing and storage as well as the
                  ability to login They can also comment on posts if they are
                  logged in. If the user idles for too long they will be logged
                  out of their account The application contained.
                  <Typography variant="h6" style={{ color: "black" }}>
                    Technologies:
                  </Typography>
                  <Box component="div">
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
                      src="./badges/css.png"
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
                      src="./badges/mysql.png"
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
                  </Box>
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/Qabas-al-ani/The-Tech-blog"
                    target="_blank"
                  >
                    <GitHub style={{ marginRight: 5 }} />
                    GitHub
                  </Button>
                  {/* <Button
                    size="small"
                    color="primary"
                    href="https://serene-cove-48650.herokuapp.com/"
                    target="_blank"
                  >
                    <TvSharp style={{ marginRight: 5 }} /> Demo
                  </Button> */}
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Project-3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} id="project-3">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 3"
                width="100%"
                height="350"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Fitness-Tracker
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  This app helps users to be able to view create and track daily
                  workouts,to be able to log multiple exercises in a workout on
                  a given day also be able to track the (name, type, weight,
                  sets, reps and duration) if there's a need of a cardio
                  exercise cardio exercise, I should be able to track my
                  distance traveled.
                  <Typography variant="h6" style={{ color: "black" }}>
                    Technologies:
                  </Typography>
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
                      src="./badges/express.png"
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
                      src="./badges/mongodb.png"
                      alt="pic"
                      sx={{ height: 50, width: 50, margin: 5 }}
                    />
                  </Box>
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/Qabas-al-ani/Fitness-Tracker"
                    target="_blank"
                  >
                    <GitHub style={{ marginRight: 5 }} />
                    GitHub
                  </Button>
                  {/* <Button
                    size="small"
                    color="primary"
                    href="https://young-waters-38930.herokuapp.com/?id=6160e97cf44b2100168cded8"
                    target="_blank"
                  >
                    <TvSharp style={{ marginRight: 5 }} /> Demo
                  </Button> */}
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Project-4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} id="project-4">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                width="100%"
                height="350"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  RESTful API E-Commerce
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  This project is the creation of the back end for an e-commerce
                  site to help big companies store their data as Categories,
                  Products, Tags by getting the data needed or creating ond
                  posting or deleting and that's all been made by the backend,
                  in this app i used Express.js API and Sequelize to interact
                  with database.
                  <Typography variant="h6" style={{ color: "black" }}>
                    Technologies:
                  </Typography>
                  <Box component="div">
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
                      src="./badges/sql.png"
                      alt="pic"
                      sx={{ height: 50, width: 50, margin: 5 }}
                    />
                    <Box
                      component="img"
                      className="language-1"
                      src="./badges/mysql.png"
                      alt="pic"
                      sx={{ height: 50, width: 50, margin: 5 }}
                    />
                  </Box>
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/Qabas-al-ani/RESTful-API-E-Commerce"
                    target="_blank"
                  >
                    <GitHub style={{ marginRight: 5 }} />
                    GitHub
                  </Button>
                  {/* <Button
                    size="small"
                    color="primary"
                    href="https://github.com/Qabas-al-ani/RESTful-API-E-Commerce/blob/main/Assets/e-commerce1.gif"
                    target="_blank"
                  >
                    <TvSharp style={{ marginRight: 5 }} /> Demo
                  </Button> */}
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Project-6 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} id="project-6">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 6"
                width="100%"
                height="350"
                image={project6}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Weather Dashboard-Api
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  This is my Weather Dashboard Api that I created by using the
                  HTML,CSS, Bootstrap, and Javascript. I added a screenshot of
                  the Weather Dashboard, and also i included a little video that
                  shows the functionality of the Weather Dashboard.
                  <br />
                  <br />
                  <Typography variant="h6" style={{ color: "black" }}>
                    Technologies:
                  </Typography>
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
                      src="./badges/bootstrap.png"
                      alt="pic"
                      sx={{ height: 50, width: 50, margin: 5 }}
                    />
                  </Box>
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/Qabas-al-ani/Weather-Dashboard-Api"
                    target="_blank"
                  >
                    <GitHub style={{ marginRight: 5 }} />
                    GitHub
                  </Button>
                  {/* <Button
                    size="small"
                    color="primary"
                    href="https://qabas-al-ani.github.io/Weather-Dashboard-Api/"
                    target="_blank"
                  >
                    <TvSharp style={{ marginRight: 5 }} /> Demo
                  </Button> */}
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
