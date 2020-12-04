import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Jimmy from "../assets/img/Jimmy.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    color: "white",
  },
  leftPanel: {
    backgroundColor: "rgb(97, 41, 134)",
    paddingTop: theme.spacing(30),
    paddingLeft: theme.spacing(20),
  },
  rightPanel: {
    backgroundImage: `url(${Jimmy})`,
    backgroundSize: "cover",
  },
  hello: {
    fontSize: theme.typography.pxToRem(180),
    textTransform: "uppercase",
    fontWeight: 1000,
    lineHeight: 0.85,
    letterSpacing: 5,
  },
}));

function Introduction() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} alignItems="stretch" wrap="nowrap">
      <Grid
        item
        xs={6}
        className={classes.leftPanel}
        container
        direction="column"
      >
        <Typography component="h1" className={classes.hello}>
          He
          <br />
          llo.
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.rightPanel}></Grid>
    </Grid>
  );
}

export default Introduction;
