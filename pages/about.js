import Layout from "../components/Layout";
import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  about: {
    minHeight: "88.7vh",
    padding: "20px"
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
  paragraph: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1.35em",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.75em",
    }, 
  }
});

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <div className={classes.about}>
          <Typography variant="h4" align="center" color="primary" className={classes.title}>About us</Typography>
          <Typography variant="body1" align="center" className={classes.paragraph}>
            An open source project to show what to eat when you're ill
          </Typography>
          <Typography component="p" align="center" className={classes.paragraph}>
            Check us out on{" "}
            <a target="_new" href="https://github.com/drex44/good-food-guide">
              Github
            </a>
          </Typography>
        </div>
      </Layout>
    );
  }
}

About.getInitialProps = async function(context) {
  return {};
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
