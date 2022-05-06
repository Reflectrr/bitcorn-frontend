import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { toggleDrawer } from "../reducers/mobileReducer";
import { useSelector, useDispatch } from "react-redux";
import { Button, Hidden } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  const history = useHistory();

  const BarMenu = (
    <>
      <Button onClick={() => history.push("/")}>
        <img
          src="/logo.png"
          alt=""
          height="60px"
          className={classes.toolbarLogo}
        />
      </Button>
      <Hidden mdUp>
        <span style={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(toggleDrawer())}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Hidden smDown>
        <Button
          variant="text"
          className={classes.toolbarButtons}
          onClick={() => history.push("/intro")}
        >
          Intro
        </Button>
      </Hidden>
    </>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>{BarMenu}</Toolbar>
    </AppBar>
  );
};

export default Navbar;
