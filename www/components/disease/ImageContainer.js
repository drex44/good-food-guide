import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = ({ breakpoints }) => ({
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
    [breakpoints.down("sm")]: {
      width: "100%"
    },
    [breakpoints.up("md")]: {
      width: "60%"
    },
    [breakpoints.up("lg")]: {
      width: "40%"
    }
  }
});

const ImageContainer = ({ classes, src, alt }) => (
  <div className={classes.boxImage}>
    <img className={classes.images} src={src} alt={alt} />
  </div>
);

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default withStyles(styles)(ImageContainer);
