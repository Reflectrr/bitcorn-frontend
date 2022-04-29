import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const Info = () => {
  const classes = useSelector((state) => state.classes);
  const data = useSelector((state) => state.data);
  const lastDay = data ? data[data.length - 1] : null;
  const prediction = useSelector((state) => state.prediction);

  return (
    <div className={classes.infoBox}>
      {lastDay && (
        <Typography variant="h4" gutterBottom>
          Price on {lastDay.Date.toDateString()}: ${lastDay.Close}
        </Typography>
      )}
      <Typography variant="h4">
        Prediction for next day's close: ${prediction}
      </Typography>
    </div>
  );
};

export default Info;
