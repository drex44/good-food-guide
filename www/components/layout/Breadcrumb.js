import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",

    "& p": {
      display: "inline-block"
    },

    "& a": {
      margin: 0,
      height: 18
    },

    "& .homeIcon": {
      fontSize: 18,
      color: theme.palette.primary.main,

      "&:hover": {
        color: "#751d84"
      }
    },

    "& .slash": {
      margin: "0 10px"
    },

    "& .breadcrumbTitle": {
      textTransform: "capitalize"
    }
  }
});

class Breadcrumb extends React.Component {
  state = {
    sickName: ""
  };
  componentDidMount() {
    this.setState({ sickName: getQueryStringValue("disease") });
  }
  render() {
    const { classes } = this.props;
    const { sickName } = this.state;

    if (sickName !== "") {
      return (
        <div className={classes.root}>
          <Link href="/">
            <Tooltip title="Home" placement="left">
              <Icon className="homeIcon">home</Icon>
            </Tooltip>
          </Link>
          <BreadcrumbSlash />
          <BreadcrumbTitle>disease</BreadcrumbTitle>
          <BreadcrumbSlash />
          <BreadcrumbTitle>{sickName}</BreadcrumbTitle>
        </div>
      );
    } else {
      return "";
    }
  }
}

Breadcrumb.propTypes = {
  classes: PropTypes.object.isRequired
};

function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

const BreadcrumbTitle = props => (
  <Typography className="breadcrumbTitle">{props.children}</Typography>
);

const BreadcrumbSlash = () => <Typography className="slash">/</Typography>;

export default withStyles(styles)(Breadcrumb);
