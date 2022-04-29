import React from "react";
import Chart from "../components/Chart";
import Info from "../components/Info";
import { Grid } from "@material-ui/core";

const HomePageView = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" direction="row">
      <Grid item xs={12} lg={8}>
        <div className="container" style={{ height: "500px" }}>
          <Chart />
        </div>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Info />
      </Grid>
    </Grid>
  );
};

export default HomePageView;
