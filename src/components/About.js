import { Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import Jimmy from "../assets/img/Jimmy.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: theme.spacing(4),
  },
  title: {
    position: "relative",
    textAlign: "center",
  },
  underline: {
    display: "block",
    width: 70,
    borderRadius: 5,
    height: 4,
    backgroundColor: "rgb(97, 41, 134)",
    position: "absolute",
    left: "50%",
    top: "100%",
    transform: "translateX(-50%)",
  },
  container: {
    flexGrow: 1,
  },
  avatar: {
    width: 400,
    height: 400,
    backgroundImage: `url(${Jimmy})`,
    backgroundSize: "200%",
    backgroundPositionX: "50%",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
  },
  rightPanel: {
    paddingRight: theme.spacing(16),
  },
  name: {
    color: "rgb(97, 41, 134)",
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  function: {
    marginBottom: theme.spacing(4),
  },
  description: {
    marginBottom: theme.spacing(4),
  },
}));

function About(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography variant="h3" className={classes.title}>
          About
          <div className={classes.underline} />
        </Typography>
      </Grid>
      <Grid item container className={classes.container} alignItems="center">
        <Grid container item xs={12} lg={6} justify="center">
          <div className={classes.avatar} />
        </Grid>
        <Grid item xs={12} lg={6} className={classes.rightPanel}>
          <Typography variant="h3" className={classes.name}>
            I'm Jimmy Ravaloson
          </Typography>
          <Typography variant="h5" className={classes.function}>
            Web Developer
          </Typography>
          <Typography className={classes.description}>
            Young, dynamic and passionate about new technology from my
            childwood. Always devote to meeting new challenges in the world of
            development. Rigor and organization are my watchwords. All this with
            a smile.
          </Typography>
          <Grid container>
            <Grid item>
              <IconButton>
                <LinkedIn />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <Twitter />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
