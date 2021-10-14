import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

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
  return (
    <Box component="div">
      <Grid container justify="center">
        <Box component="form">
          <Typography variant="h5">hire or fire</Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company name"
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <br/>
          <Button variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
              Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
