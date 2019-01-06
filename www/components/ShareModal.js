import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon //,
  // EmailShareButton,
  // EmailIcon
} from "react-share";
/*
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
*/
function getModalStyle() {
  const top = 50; //+ rand();
  const left = 50; //+ rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = ({ palette, shadows, spacing }) => ({
  paper: {
    position: "absolute",
    width: spacing.unit * 30,
    backgroundColor: palette.background.paper,
    boxShadow: shadows[5],
    padding: spacing.unit * 3,
    flexgrow: 1,
    textAlign: "center"
  }
});

//To get URL share: https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript/36577223 (Double check: it might not work)

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, shareLink } = this.props;
    const title = "Good Food Guide: Health Remedies";
    const hashTag = "#HealthFoodGuide";
    const description = "Health foods that make great ailment remedies.";

    return (
      <div>
        <Button color="primary" onClick={this.handleOpen}>
          Share
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h5" id="modal-title" color="primary">
              Share the health:
            </Typography>
            <Grid container spacing={22} justify="center">
              <FacebookShareButton url={shareLink} hashtag={hashTag}>
                <FacebookIcon size={38} round={true}>
                  {" "}
                </FacebookIcon>
              </FacebookShareButton>

              <TwitterShareButton url={shareLink} hashtag={hashTag}>
                <TwitterIcon size={38} round={true} />
              </TwitterShareButton>

              <RedditShareButton
                url={shareLink}
                title={title}
                windowWidth={660}
                windowHeight={460}
              >
                <RedditIcon size={38} round={true} />
              </RedditShareButton>

              <LinkedinShareButton
                url={shareLink}
                title={title}
                description={description}
              >
                <LinkedinIcon size={38} round={true} />
              </LinkedinShareButton>
            </Grid>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(SimpleModal);
