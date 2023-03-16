import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { IconButton, Link } from "@material-ui/core";
import { LinkedIn, Telegram, GitHub, Send, Mail } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  socialButton: {
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/robert-lee-b703a0238",
  twitter: "https://twitter.com/robertl34058577",
  telegram: "https://t.me/cerberusmaster",
  github: "https://github.com/cerberusmaster",
  mail: "mailto:robert19960318@gmail.com"
}

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
      <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 10 }}>
        <IconButton component="label" className={classes.socialButton}>
          <Link href={SOCIAL.linkedin} className={classes.socialButton}>
            <LinkedIn />
          </Link>
        </IconButton>
        <IconButton component="label" className={classes.socialButton}>
          <Link href={SOCIAL.github} className={classes.socialButton}>
            <GitHub />
          </Link>
        </IconButton>
        <IconButton component="label" className={classes.socialButton}>
          <Link href={SOCIAL.mail} className={classes.socialButton}>
            <Mail />
          </Link>
        </IconButton>
        <IconButton component="label" className={classes.socialButton}>
          <Link href={SOCIAL.telegram} className={classes.socialButton}>
            <Telegram />
          </Link>
        </IconButton>
      </Box>
    </Box >
  );
};

export default Contact;
