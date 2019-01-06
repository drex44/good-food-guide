import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";

const styles = () => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  }
});

const Contributors = ({ classes, contributors }) => (
  <React.Fragment>
    <div className={classes.root}>
      {contributors.map((item, index) => {
        return <StyledContributor key={index} contributor={item} />;
      })}
    </div>
  </React.Fragment>
);

Contributors.propTypes = {
  classes: PropTypes.object.isRequired,
  contributors: PropTypes.array.isRequired
};

const contributorStyles = () => ({
  contributor: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.2)"
    }
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

const Contributor = props => {
  const { contributor, classes } = props;
  return (
    <div className={classes.contributor}>
      <a href={contributor.html_url} target="_blank">
        <center>
          <Avatar
            alt={contributor.login}
            src={contributor.avatar_url}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        </center>
      </a>
      <Typography style={{ textAlign: "center" }}>
        {contributor.login}
      </Typography>
    </div>
  );
};

Contributor.propTypes = {
  classes: PropTypes.object.isRequired,
  contributor: PropTypes.object.isRequired
};

const StyledContributor = withStyles(contributorStyles)(Contributor);

export default withStyles(styles)(Contributors);
