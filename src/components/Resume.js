import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    paddingTop: 50
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "14rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Front End Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <strong>Sippd</strong>, United States
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <ul>
              <li>Participated in building hybrid mobile application based on <strong>React Native</strong> buliding reusable <strong>components</strong>, <strong>screens</strong>, <strong>layouts</strong>, <strong>routes</strong> under the <strong>Best React Practices</strong>.</li>
              <li>Integrated <strong>React Saga</strong>, <strong>MobX</strong>, <strong>AWS analytics</strong> and <strong>Context Provider</strong> for the state management and <strong>Formik</strong> and <strong>Yup</strong> for validation.</li>
              <li>Integration with <strong>Nodejs</strong> back-end API deployed to AWS running on <strong>S3</strong>, <strong>EC2</strong>, <strong>lambda functions</strong>.</li>
              <li>Built admin site managing products, customers, vendors based on <strong>Angularjs</strong>, <strong>MaterialUI</strong>.</li>
              <li>Optimised and refactored project with <strong>E2E</strong>, <strong>Unit Test</strong> Frameworks such as <strong>Jest</strong>, <strong>Cypress</strong>.</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019 - 2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Full Stack Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <strong>Freshwork Studio</strong>, Canada
          </Typography>
          <Typography
            variant="subtitle1"
            align="justify"
            className={classes.subtitle1}
          >
            <ul>
              <li>Experience in data visualizations with <strong>D3</strong>, <strong>Angular</strong> <strong>Fusion Charts</strong> and <strong>ChartJS</strong>.</li>
              <li>Experience of JavaScript testing framework like <strong>Jest</strong>, <strong>Jasmine</strong>, <strong>Mocha</strong> and <strong>Chai</strong>.</li>
              <li>Maintained Featured <strong>NFT marketplace</strong> on Binance smart chain with using <strong>Nextjs</strong><strong>React</strong>, <strong>Node</strong>, <strong>Javascript</strong>,
                <strong>Typescript</strong>, <strong>PostgreSQL</strong>.</li>
              <li>Expertise in implementing features in web applications using <strong>MEAN</strong> and <strong>MERN</strong> Stack: <strong>MongoDB</strong>, <strong>Express</strong>,
                <strong>Angular</strong> 4, <strong>React</strong> and <strong>NodeJS</strong>.</li>
              <li>Experience of using <strong>SASS</strong>, <strong>LESS</strong> and <strong>Bootstrap</strong> to enhance the user experience.</li>
              <li>Worked on <strong>ERP</strong>, <strong>CRM</strong>, <strong>Fintech</strong> projects on the <strong>Netsuite</strong> platform with <strong>Nesuite</strong> script.</li>
              <li>Hands on experience of creating <strong>REST</strong> web services by using <strong>Nodejs</strong> and <strong>Express</strong> framework.</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016 - 2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Front End Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <strong>Dvico</strong>, Ukraine
          </Typography>
          <Typography
            variant="subtitle1"
            align="justify"
            className={classes.subtitle1}
          >
            <li>Built +100 web pages and layouts with <strong>Bootstrap</strong>, <strong>CSS3</strong>, <strong>SCSS</strong>.</li>
            <li>Built dynamic and mobile responsible web pages using <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>SASS</strong>, <strong>ECMA JavaScript</strong>, <strong>Bootstrap</strong>, <strong>Tailwind</strong> CSS.</li>
            <li>Composed animations with <strong>CSS</strong>, <strong>SVG</strong>, <strong>JavaScript</strong> to decorate web components.</li>
            <li>Experience in building <strong>Single</strong> Page Application (SPA) using <strong>Model</strong> View Controller (MVC) frameworks such as <strong>React</strong>, <strong>Vue</strong>, <strong>NodeJS</strong>, <strong>Express</strong>.</li>
            <li>Utilized <strong>HTML</strong> 5, <strong>CSS</strong> 3, <strong>SCSS</strong> and <strong>JavaScript</strong> to create responsive landing pages.</li>
            <li>Hands on experience with version control tools, repositories, <strong>CI/CD</strong> work flow, such as <strong>Github</strong>, <strong>SVN</strong>, <strong>Gitlab</strong>, <strong>Bitbucket</strong>.</li>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2014 - 2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Education
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <strong>Bachelor of Science</strong>, Lui Cheung Kwang University
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Learnt and gained software architecture, modern programming lanugages and frameworks, coding design pattern, maintaining products, business strategy, ecommerce and shopify work flow.
            Love to work on Computer Mathmatics, Graphics Designing and user interfaces and ACM.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
