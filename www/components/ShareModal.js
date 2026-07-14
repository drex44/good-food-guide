import React, { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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

//To get URL share: https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript/36577223 (Double check: it might not work)

const SimpleModal = ({ shareLink }) => {
  const [open, setOpen] = useState(false);
  const title = "Good Food Guide: Health Remedies";
  const hashTag = "#HealthFoodGuide";
  const description = "Health foods that make great ailment remedies.";

  return (
    <div>
      <Button color="primary" onClick={() => setOpen(true)}>
        Share
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          style={getModalStyle()}
          sx={theme => ({
            position: "absolute",
            width: theme.spacing(30),
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(3),
            flexGrow: 1,
            textAlign: "center"
          })}
        >
          <Typography variant="h5" id="modal-title" color="primary">
            Share the health:
          </Typography>
          <Grid container spacing={3} justifyContent="center">
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
        </Box>
      </Modal>
    </div>
  );
};

SimpleModal.propTypes = {
  shareLink: PropTypes.string.isRequired
};

export default SimpleModal;
