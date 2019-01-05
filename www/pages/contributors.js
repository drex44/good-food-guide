import React from "react";
import fetch from "isomorphic-fetch";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/layout/Layout";
import ContributorList from "../components/contributors/ContributorList";
import { StyledPageTitle, StyledSubtitle } from "../components/layout/Commons";
import { Grid } from "@material-ui/core";

const styles = () => ({
  root: { margin: "2%" }
});

const Contributors = ({ classes, contributors }) => (
  <Layout>
    <Grid item lg={8} xs={10} className={classes.root}>
      <StyledPageTitle>Contributors</StyledPageTitle>
      <StyledSubtitle>Amazing people who helped this project</StyledSubtitle>
      <br />
      <ContributorList contributors={contributors} />
    </Grid>
  </Layout>
);

Contributors.propTypes = {
  classes: PropTypes.object.isRequired
};

Contributors.getInitialProps = async function(context) {
  const response = await fetch(
    "https://api.github.com/repos/drex44/good-food-guide/contributors"
  );
  const data = await response.json();
  return {
    contributors: data
  };
};

export default withStyles(styles)(Contributors);
