import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "black",
  },
});

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "black",
    },
    "&.MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "& .Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();

  return (
    <Box component="div">
        <Navbar />
      <Grid container justifyContent="center">
        <Box component="form" className={classes.form} action="https://formsubmit.co/2d2c58bfbd0969e480c284cfd7ae1e7e" method="POST">
        <input type="hidden" name="_subject" value="New submission!"/>
              <input type="hidden" name="_captcha" value="false"/>
          <Typography
            variant="h5"
            style={{
              color: "black",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Contact Information
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            name="name"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            name="email"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            margin="dense"
            size="medium"
            name="message"
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            type="submit"
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
