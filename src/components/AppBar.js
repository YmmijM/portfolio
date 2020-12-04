import {
  AppBar as MuiAppBar,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
  toolbar: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppBar(props) {
  const classes = useStyles();

  return (
    <MuiAppBar
      position="fixed"
      color="transparent"
      elevation={0}
      className={classes.root}
    >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Jimmy Ravaloson
        </Typography>
        <Button>About</Button>
        <Button>Skills</Button>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
