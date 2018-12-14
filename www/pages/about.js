import Layout from "../components/layout/Layout";
import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";
import { StyledPageTitle, StyledSubtitle } from "../components/layout/Commons";

const styles = theme => ({
  root: { margin: "2%" },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75em",
      textAlign: "center"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.75em"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.75em"
    }
  }
});

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Grid className={classes.root}>
          <StyledPageTitle>About us</StyledPageTitle>
          <StyledSubtitle>
            An open source project to show what to eat when you're ill
          </StyledSubtitle>
          <StyledSubtitle>
            Check us out on{" "}
            <a target="_new" href="https://github.com/drex44/good-food-guide">
              Github
            </a>
          </StyledSubtitle>
        </Grid>
      </Layout>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
