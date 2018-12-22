import Layout from "../components/layout/Layout";
import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";
import { StyledPageTitle, StyledSubtitle } from "../components/layout/Commons";

const styles = theme => ({
  root: {
    margin: "2%",
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
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

class Suggestions extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Grid item md={10} xs={12} className={classes.root}>
          <iframe
            className="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrhWeK9YFxFVPuoY?backgroundColor=purple"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="917"
            style={{ background: "transparent" }}
          />
        </Grid>
      </Layout>
    );
  }
}

Suggestions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Suggestions);
