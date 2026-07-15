import React, { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon
} from "react-share";

const TITLE = "Good Food Guide: Health Remedies";
const DESCRIPTION = "Discover which foods help with this condition — natural health remedies from Good Food Guide.";

function getAbsoluteUrl(path) {
  if (typeof window !== "undefined") {
    return `${window.location.origin}${path}`;
  }
  return path;
}

const ShareButtons = ({ shareLink }) => {
  const url = getAbsoluteUrl(shareLink);
  const iconSize = 40;

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
      <Tooltip title="Share on Facebook">
        <span>
          <FacebookShareButton url={url} hashtag="#HealthFoodGuide">
            <FacebookIcon size={iconSize} round />
          </FacebookShareButton>
        </span>
      </Tooltip>

      <Tooltip title="Share on X (Twitter)">
        <span>
          <TwitterShareButton url={url} title={TITLE} hashtags={["HealthFoodGuide", "GoodFoodGuide"]}>
            <XIcon size={iconSize} round />
          </TwitterShareButton>
        </span>
      </Tooltip>

      <Tooltip title="Share on WhatsApp">
        <span>
          <WhatsappShareButton url={url} title={TITLE} separator=" — ">
            <WhatsappIcon size={iconSize} round />
          </WhatsappShareButton>
        </span>
      </Tooltip>

      <Tooltip title="Share on LinkedIn">
        <span>
          <LinkedinShareButton url={url} title={TITLE} summary={DESCRIPTION}>
            <LinkedinIcon size={iconSize} round />
          </LinkedinShareButton>
        </span>
      </Tooltip>

      <Tooltip title="Share on Reddit">
        <span>
          <RedditShareButton url={url} title={TITLE} windowWidth={660} windowHeight={460}>
            <RedditIcon size={iconSize} round />
          </RedditShareButton>
        </span>
      </Tooltip>

      <Tooltip title="Share via Email">
        <span>
          <EmailShareButton url={url} subject={TITLE} body={DESCRIPTION}>
            <EmailIcon size={iconSize} round />
          </EmailShareButton>
        </span>
      </Tooltip>
    </Box>
  );
};

const CopyLinkButton = ({ shareLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = getAbsoluteUrl(shareLink);
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Button
      onClick={handleCopy}
      size="small"
      variant="outlined"
      startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
      color={copied ? "success" : "primary"}
      sx={{ mt: 1, width: "100%", textTransform: "none" }}
    >
      {copied ? "Link copied!" : "Copy link"}
    </Button>
  );
};

const ShareModal = ({ shareLink }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        color="primary"
        onClick={handleOpen}
        startIcon={<ShareIcon />}
        size="small"
        aria-label="Share this page"
      >
        Share
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        slotProps={{ paper: { sx: { p: 2, maxWidth: 300 } } }}
      >
        <Typography variant="subtitle2" align="center" color="text.secondary" gutterBottom>
          Share the health
        </Typography>
        <ShareButtons shareLink={shareLink} />
        <CopyLinkButton shareLink={shareLink} />
      </Popover>
    </>
  );
};

ShareModal.propTypes = {
  shareLink: PropTypes.string.isRequired
};

ShareButtons.propTypes = {
  shareLink: PropTypes.string.isRequired
};

CopyLinkButton.propTypes = {
  shareLink: PropTypes.string.isRequired
};

export default ShareModal;
