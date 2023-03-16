import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { LinkedIn, Twitter, Telegram, GitHub, Instagram } from "@material-ui/icons";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/robert-lee-b703a0238",
  twitter: "https://twitter.com/robertl34058577",
  telegram: "https://t.me/cerberusmaster",
  github: "https://github.com/cerberusmaster"
}

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} onClick={() => window.open(SOCIAL.linkedin)} />
      <BottomNavigationAction icon={<GitHub />} className={classes.root} onClick={() => window.open(SOCIAL.github)}/>
      <BottomNavigationAction icon={<Telegram />} className={classes.root} onClick={() => window.open(SOCIAL.telegram)}/>
    </BottomNavigation>
  );
};
export default Footer;
