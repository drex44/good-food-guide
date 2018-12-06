import React from "react";
import fetch from "isomorphic-fetch";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";

import Layout from "../components/layout/Layout";

const styles = theme => ({
  contributors: {
    padding: "20px"
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
  },
  paragraph: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.35em"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.75em"
    }
  },
  row: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  root: {
    display: "flex",
    width: "60%",
    padding: "20px",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  }
});

class Contributors extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <div className={classes.contributors}>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            className={classes.title}
          >
            Contributors
          </Typography>
          <br />
          <Typography
            variant="body1"
            align="center"
            className={classes.paragraph}
          >
            Amazing people who helped this project
          </Typography>
        </div>
        <div className={classes.root}>
          {this.props.contributors.map((item, index) => {
            return (
              <div key={index} className={classes.row + " contributor"}>
                <a href={item.html_url} target="_blank">
                  <center>
                    <Avatar
                      alt={item.login}
                      src={item.avatar_url}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </center>
                </a>
                <Typography style={{ textAlign: "center" }}>
                  {item.login}
                </Typography>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

Contributors.getInitialProps = async function(context) {
  const response = await fetch(
    "https://api.github.com/repos/drex44/good-food-guide/contributors"
  );
  const data = await response.json();
  return {
    contributors: data
  };
};

Contributors.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contributors);
