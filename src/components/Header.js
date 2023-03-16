import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/winter-avatar-circle.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title: {
    color: "white",
    fontSize: 36,
    fontFamily: "monospace",
    // textTransform: "uppercase"
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Mahmudul Alam" />
        {/* <Typography className={classes.subtitle} variant="h4">
          <Typed
            strings={[
              "Front End Developer\
              Full Stack Developer\
              Hybrid Mobile App Developer",
            ]}
            typeSpeed={70}
            backSpeed={50}
          />
        </Typography> */}
      </Grid>
      <h3 className={classes.title}>
        Robert Lee
      </h3>
    </Box>
  );
};

export default Header;
