import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import project1 from "../my-projects/pro2.png";
import project2 from "../my-projects/tech-blog.png";
import project3 from "../my-projects/t4 (1).png";
import project4 from "../my-projects/e-commerce1 (1).gif";
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

const useStyles = makeStyles({
  mainContainer: {
    background: 'url(backgound-img.jpg) no-repeat center center fixed',
    height: "100%",
  },
  cardContainer: {
    maxWidth: "345",
    margin: "3rem 5rem auto",
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">


        {/* Project-1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="250"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Rehab-Connect
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="paragraph"
                >
                  A rehab website intended for former addicts to be able to
                  connect with others and build relationships through posting to
                  different milestones on the site.
                  <br/>
                  <br/>
                  <br/>
                  <Typography  variant="h6" style={{color: "black"}}>
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
                  <Button size="small" color="primary" href="https://github.com/jbramirez03/Rehab-Connect" target="_blank">
                    <GitHub style={{ marginRight: 5 }} />
                    GitHub
                  </Button>
                  <Button size="small" color="primary" href="https://warm-hamlet-41451.herokuapp.com/" target="_blank">
                    <TvSharp style={{ marginRight: 5 }} /> Demo
                  </Button>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>





          {/* Project-2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 2"
                  height="250"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Tech Blog
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="paragraph"
                  >
                   This is a back end and front end project that allows users to post about whatever they wish. It supports account creation with secure password hashing and storage as well as the ability to login They can also comment on posts if they are logged in. If the user idles for too long they will be logged out of their account The application contained.
                   <Typography  variant="h6" style={{color: "black"}}>
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
                    <Button size="small" color="primary" href="https://github.com/Qabas-al-ani/The-Tech-blog" target="_blank">
                      <GitHub style={{ marginRight: 5 }}  />
                      GitHub
                    </Button>
                    <Button size="small" color="primary" href="https://serene-cove-48650.herokuapp.com/" target="_blank">
                      <TvSharp style={{ marginRight: 5 }}  /> Demo
                    </Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
         </Grid>




          {/* Project-3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 3"
                  height="250"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                  Fitness-Tracker
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="paragraph"
                  >
                This app helps users to be able to view create and track daily workouts,to be able to log multiple exercises in a workout on a given day also be able to track the (name, type, weight, sets, reps and duration) if there's a need of a cardio exercise cardio exercise, I should be able to track my distance traveled.

                <Typography  variant="h6" style={{color: "black"}}>
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
                    <Button size="small" color="primary" href="https://github.com/Qabas-al-ani/Fitness-Tracker" target="_blank">
                      <GitHub style={{ marginRight: 5 }}  />
                      GitHub
                    </Button>
                    <Button size="small" color="primary" href="https://young-waters-38930.herokuapp.com/?id=6160e97cf44b2100168cded8" target="_blank">
                      <TvSharp style={{ marginRight: 5 }} /> Demo
                    </Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
         </Grid>





          {/* Project-4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 4"
                  height="250"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                  RESTful API E-Commerce
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="paragraph"
                  >
                  This project is the creation of the back end for an e-commerce site to help big companies store their data as Categories, Products, Tags by getting the data needed or creating ond posting or deleting and that's all been made by the backend, in this app i used Express.js API and Sequelize to interact with database.
                    <Typography  variant="h6" style={{color: "black"}}>
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
                    <Button size="small" color="primary" href="https://github.com/Qabas-al-ani/RESTful-API-E-Commerce" target="_blank">
                      <GitHub style={{ marginRight: 5 }} />
                      GitHub
                    </Button>
                    <Button size="small" color="primary" href="https://github.com/Qabas-al-ani/RESTful-API-E-Commerce/blob/main/Assets/e-commerce1.gif" target="_blank">
                      <TvSharp style={{ marginRight: 5 }} /> Demo
                    </Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
         </Grid>





          {/* Project-5 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 5"
                  height="250"
                  image={project5}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    
                  Team Profile Generator
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="paragraph"
                  >
                  It's back end project that's help users to create a web page for a team that are working together its stats by asking the leader or the manager the insert information about his employee and for each worker there are specific form of questions that have to be field to get full information about each person with each info.
                  <Typography  variant="h6" style={{color: "black"}}>
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
                    <Button size="small" color="primary">
                      <GitHub style={{ marginRight: 5 }} />
                      GitHub
                    </Button>
                    <Button size="small" color="primary">
                      <TvSharp style={{ marginRight: 5 }} /> Demo
                    </Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
         </Grid>




          {/* Project-6 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 6"
                  height="250"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    tech Blog
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="paragraph"
                  >
                    A rehab website intended for former addicts to be able to
                    connect with others and build relationships through posting
                    to different milestones on the site.
                  </Typography>
                  <CardActions>
                    <Button size="small" color="primary">
                      <GitHub style={{ marginRight: 5 }} />
                      GitHub
                    </Button>
                    <Button size="small" color="primary">
                      <TvSharp style={{ marginRight: 5 }} /> Demo
                    </Button>
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
