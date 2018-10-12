import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1
  },
  images: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    borderRadius: "10px"
  },
  boxImage: {
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
    [theme.breakpoints.up('md')]: {
      width: "60%",
    },
    [theme.breakpoints.up('lg')]: {
      width: "40%",
    },
  }
});

class ContainerImage extends React.Component {

  render() {
    const { classes, src } = this.props;

    return (
      <div className={classes.boxImage}>
        <img className={classes.images} src={src.image} alt={src.sick}/>
        <hr style={{
          background: '#9c27b0', 
          width: '30%',
          border: 'none',
          height: '2px'}}>
        </hr>
      </div>
    );
  }
}

ContainerImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainerImage);
