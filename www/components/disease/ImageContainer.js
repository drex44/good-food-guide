import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  images: {
    maxWidth: "400px",
    maxHeight: "400px",
    height: "auto",
    display: "block",
    borderRadius: "10px"
  },
  boxImage: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.up("md")]: {
      width: "60%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%"
    }
  }
});

class ImageContainer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.boxImage}>
        <img
          className={classes.images}
          src={this.props.src}
          alt={this.props.alt}
        />
      </div>
    );
  }
}

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default withStyles(styles)(ImageContainer);
