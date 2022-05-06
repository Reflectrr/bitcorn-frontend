import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "../style";

const Intro = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center" direction="row">
      <Grid item xs={12} lg={1} />
      <Grid item xs={12} lg={5}>
        <img src="ml.jpg" alt="help" className={classes.img} />
      </Grid>
      <Grid item xs={12} lg={1} />
      <Grid item xs={12} lg={4}>
        <Typography variant="h5" gutterBottom>
          Our project aims to display the past prices of Bitcoin as well as
          trying to predict the price on next-close based on some machine
          learning model. The bitcoin price is fetched from Polygon.io under
          free license.
        </Typography>
        <Typography variant="h5">
          The website you are seeing is built using React (with Redux,
          React-Router, Material-UI). It is hosted in an AWS S3 bucket with
          static web hosting. The server is a Flask server running on an AWS EC2
          instance.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={1} />
    </Grid>
  );
};

export default Intro;
