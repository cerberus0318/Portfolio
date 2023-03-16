import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/1.png";
import project2 from "../images/2.png";
import project4 from "../images/4.png";
import project5 from "../images/5.png";
import project6 from "../images/6.png";
import project7 from "../images/7.png";
import project8 from "../images/8.png";
import project9 from "../images/9.png";
import project10 from "../images/10.png";
import project11 from "../images/11.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    paddingTop: 50
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  title: {
    textTransform: "uppercase"
  }
}));

const projects = [
  {
    name: "Yahuah Bible",
    description: `PHP, Laravel, MySQL, Bootstrap, JavaScript, TypeScript`,
    image: project7,
    url: 'http://yahuahbible.com'
  },
  {
    name: "Smart Places",
    description: `NFT Marketplace, React, React Hook, Mapbox, Web3, Solidity, \
    HTML5, CSS3, JavaScript, TypeScript, Mocha, Chai, Cypress`,
    image: project6,
    url: 'https://secondmint.smart-places.io'
  },
  {
    name: "Hotel First Inn",
    description: `nextjs, React, Sentry, WordPress, Nodejs, AWS, jQuery, MySQL, PHP, Stripe`,
    image: project1,
    url: 'https://www.hotelfirstinn.com/'
  },
  {
    name: "Nuclear Energy",
    description: `C#, Vuejs, Azure`,
    image: project2,
    url: 'https://nuclearenergy.clpgroup.com/en'
  },
  {
    name: "The Model Centre",
    description: `E-Commerce, Magento, PHP, 360magic.js, Mysql, JavaScript, TypeScript, PHP Unit Test`,
    image: project4,
    url: 'http://www.themodelcentre.com'
  },
  {
    name: "ForecastCOPS",
    description: `Google map, Django, Flask, CSS, HTML, Bootstrap, JavaScript`,
    image: project9,
    url: 'https://forecastcops.com'
  },
  {
    name: "Purrnelopes Club",
    description: `React Redux, React Thunk, React Hook`,
    image: project10,
    url: 'https://www.purrnelopescountryclub.com/'
  },
  {
    name: "Dream Home",
    description: `Webgl, React Three Fibre, AWS EC2, S3, DynamoDB, Lambda, WebScoket, React Hook`,
    image: project8,
    url: 'https://lahoma.com/virtual-designer/'
  },
  {
    name: "Sippd",
    description: `React Native, Cypress, AWS Amplify, Mobx, React Context, React Orbserver, Cypress`,
    image: project5,
    url: 'https://play.google.com/store/apps/details?id=vivino.web.app'
  },
  {
    name: "OpenFair",
    description: `Flutter, Dart, Flutter Flow`,
    image: project11,
    url: 'https://app.openfair.ca/#/home'
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom className={classes.title}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(project.url)}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div >
  );
};

export default Portfolio;
