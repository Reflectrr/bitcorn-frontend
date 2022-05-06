import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePageView from "../../pages/HomePageView";
import Intro from "../../pages/Intro";

const Routing = () => {
  return (
    <Switch>
      <Route path="/intro">
        <Intro />
      </Route>
      <Route path="/">
        <HomePageView />
      </Route>
    </Switch>
  );
};

export default Routing;
