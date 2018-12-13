import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { Grid, withStyles } from "@material-ui/core";

const styles = () => ({
  footerContainer: {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    background: "#9c27b0",
    minHeight: "4em"
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.footerContainer}>
        <FooterColumn>
          <FooterTitle>Good Food Guide - An Open Source Project</FooterTitle>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>
            Crafted &lt;&#47;&gt; with love &hearts; by{" "}
            <FooterLink underline href="/contributors">
              amazing people!
            </FooterLink>
          </FooterTitle>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="/terms">Terms</FooterLink>
        </FooterColumn>
      </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

const FooterColumn = props => (
  <Grid item lg={4} md={4} sm={4} xs={12} style={{ textAlign: "center" }}>
    {props.children}
  </Grid>
);

FooterColumn.prototype = {
  children: PropTypes.object.isRequired
};

const FooterTitle = props => (
  <Typography variant="subtitle2" style={{ color: "#ffffff" }}>
    {props.children}
  </Typography>
);

FooterTitle.prototype = {
  children: PropTypes.object.isRequired
};

const FooterLink = props => (
  <Link href={props.href}>
    <a
      style={{
        color: "#ffffff",
        margin: "0px",
        textDecoration: props.underline ? "underline" : "none",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
      }}
    >
      {props.children}
    </a>
  </Link>
);

FooterLink.prototype = {
  href: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
