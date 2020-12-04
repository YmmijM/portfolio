import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import book from "../assets/img/book.jpg";

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
  leftPanel: {
    paddingLeft: theme.spacing(12),
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
  skillTitle: {
    color: "rgb(97, 41, 134)",
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
  },
  interline: {
    marginBottom: theme.spacing(4),
  },
  book: {
    width: 400,
    height: 400,
    backgroundImage: `url(${book})`,
    backgroundSize: "150%",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
  },
}));

function Skill(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography variant="h3" className={classes.title}>
          Skills
          <div className={classes.underline} />
        </Typography>
      </Grid>
      <Grid item container className={classes.container} alignItems="center">
        <Grid
          className={classes.leftPanel}
          container
          item
          xs={12}
          lg={6}
          direction="column"
          justify="center"
        >
          <Typography variant="h4" className={classes.skillTitle}>
            Development
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button color="primary">Html</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Css</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Javascript</Button>
            </Grid>
            <Grid item>
              <Button color="primary">React</Button>
            </Grid>
            <Grid item>
              <Button color="primary">C#</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Java</Button>
            </Grid>
          </Grid>
          <Box component="span" className={classes.interline} />
          <Typography variant="h4" className={classes.skillTitle}>
            Design
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button color="primary">Photoshop</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Illustrator</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Adobe XD</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={6} justify="center">
          <div className={classes.book} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skill;
