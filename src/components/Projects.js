import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import project1 from "../my-projects/pro2.png";
import{ GitHub, TvSharp } from "@material-ui/icons"

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

const Projects = () => {
  return (
    <Box component="div">
      <Navbar />
      <Grid container justify="center" alignItems="center">
        {/* Project-1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
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
                 A rehab website intended for former addicts to be able to connect with others and build relationships through posting to different milestones on the site.
                </Typography>
                <CardActions>
                  <Button size="small" color="primary">
                  <GitHub style={{marginRight: 5}} />GitHub
                  </Button>
                  <Button size="small" color="primary">
                    <TvSharp style={{marginRight: 5}} /> Demo
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
