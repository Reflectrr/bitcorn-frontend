import { createTheme, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
export const customTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#65B7F3",
      main: "#1765AD",
      dark: "#15395B",
      contrastText: "#fff",
    },
    background: {
      default: "#15395b",
    },
  },
});
export const useStyles = makeStyles((theme) => ({
  toolbarLogo: {
    padding: "2px 0px",
    height: "60px",
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  buttonLink: {
    color: "#FFF",
    textDecoration: "none",
  },
  whiteText: {
    color: "#FFF",
    textDecoration: "none",
  },
  flexGrow: {
    flexGrow: "1",
  },
  navbar: {
    height: "100px",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolbarButtons: {
    color: "white",
    fontSize: "18px",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#15395b",
  },
  bigPadding: {
    padding: theme.spacing(3),
  },
  videoListItem: {
    padding: "10px 0",
    fontFamily: "IBM Plex Sans, sans serif",
    fontSize: "16px",
    listStyleType: "none",
    "&::before": {
      content: '"-"',
    },
  },
  centeredText: {
    textAlign: "center",
  },
  infoBox: {
    width: "75%",
    margin: "auto",
    textAlign: "center",
  },
}));
