import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.75em",
      textAlign: "center"
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "2.75em",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "3.75em",
    },
  },
  images: {
    maxWidth: "100%",
    height: "auto",
    display: "block"
  },
  boxImage: {
    [theme.breakpoints.down('sm')]: {
      width: "100px",
    },
    [theme.breakpoints.up('md')]: {
      width: "120px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "150px",
    },
  }
});

class Jumbotron extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div style=
      {{
        height: '60vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'}}>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h2"
          component="h2"
          color="primary"
        >
          A guide to know which foods are good
        </Typography>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h2"
          component="h2"
          color="primary"
        >
          when you have certain disease!
        </Typography>
        <div className={classes.boxImage}>
          <img src="https://i.imgur.com/jFe8S1R.png" alt="Good Foods" className={classes.images}></img>
        </div>
        <hr style={{
          background: '#9c27b0', 
          width: '30%',
          border: 'none',
          height: '2px'}}>
        </hr>
      </div>    
    );
  }
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Jumbotron);
