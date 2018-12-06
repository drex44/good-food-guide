import React, { Component } from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { Grid, withStyles } from "@material-ui/core";

const styles = theme => ({
  partition: {
    textAlign: "center"
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="footer-container">
        <Grid container>
          <Grid item lg = {4} md={4} sm= {4} xs={12} style={{textAlign: "center"}} className={classes.partition}>
            <Typography variant="subtitle2" style={{ color: "#ffffff" }}>
              Good Food Guide - An Open Source Project
            </Typography>
          </Grid>
          <Grid item lg = {4} md={4} sm= {4} xs={12} style={{textAlign: "center"}} className={classes.partition}>
            <Typography variant="subtitle2" style={{ color: "#ffffff" }}>
              Crafted &lt;&#47;&gt; with love &hearts; by{" "}
              <Link href="/contributors">
                <a
                  style={{
                    color: "#ffffff",
                    margin: "0px",
                    textDecoration: "underline",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                  }}
                >
                  amazing people!
                </a>
              </Link>
            </Typography>
          </Grid>
          <Grid item lg = {4} md={4} sm= {4} xs={12} style={{textAlign: "center"}} className={classes.partition}>
            <Link href="/terms">
              <a
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                }}
              >
                Terms
              </a>
            </Link>
          </Grid>
        </Grid>
        <style jsx>{`
          #footer-container {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            background: #9c27b0;
            min-height: 4em;
          }
        `}</style>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
