import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Favorite from "./components/Favorite";
import { Box } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 0,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Box className={classes.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/favorite" component={Favorite} />
        </Switch>
      </Box>
    </React.Fragment>
  );
}

export default App;
