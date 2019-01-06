import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Typography, Grid, withStyles, Button } from "@material-ui/core";

const pageTitleStyles = ({ breakpoints }) => ({
  title: {
    [breakpoints.down("sm")]: {
      fontSize: "1.75em",
      textAlign: "center"
    },
    [breakpoints.up("md")]: {
      fontSize: "2.75em"
    },
    [breakpoints.up("lg")]: {
      fontSize: "3.75em"
    }
  }
});

const PageTitle = ({ classes, align = "center", children }) => (
  <Typography
    variant="h2"
    align={align}
    color="primary"
    className={classes.title}
  >
    {children}
  </Typography>
);

PageTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export const StyledPageTitle = withStyles(pageTitleStyles)(PageTitle);

const subtitleStyles = ({ breakpoints }) => ({
  subtitle: {
    [breakpoints.down("sm")]: {
      fontSize: "1em"
    },
    [breakpoints.up("md")]: {
      fontSize: "1.35em"
    },
    [breakpoints.up("lg")]: {
      fontSize: "1.75em"
    }
  }
});

const Subtitle = ({ classes, children }) => (
  <Typography variant="subtitle1" align="center" className={classes.subtitle}>
    {children}
  </Typography>
);

Subtitle.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired
};

export const StyledSubtitle = withStyles(subtitleStyles)(Subtitle);

const paragraphStyles = ({ breakpoints }) => ({
  paragraph: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    [breakpoints.down("sm")]: {
      fontSize: "0.75em"
    },
    [breakpoints.up("md")]: {
      fontSize: "0.95em"
    },
    [breakpoints.up("lg")]: {
      fontSize: "1em"
    }
  }
});

const Paragraph = ({ classes, children }) => (
  <Typography
    variant="subtitle1"
    style={{ margin: "10px 0px" }}
    className={classes.paragraph}
  >
    {children}
  </Typography>
);

export const StyledParagraph = withStyles(paragraphStyles)(Paragraph);

const paragraphTitleStyles = ({ breakpoints }) => ({
  paragraphTitle: {
    [breakpoints.down("sm")]: {
      fontSize: "1.5em"
    },
    [breakpoints.up("md")]: {
      fontSize: "1.65em"
    },
    [breakpoints.up("lg")]: {
      fontSize: "1.75em"
    }
  }
});

const ParagraphTitle = ({ classes, children }) => (
  <Typography variant="h2" color="primary" className={classes.paragraphTitle}>
    {children}
  </Typography>
);

export const StyledParagraphTitle = withStyles(paragraphTitleStyles)(
  ParagraphTitle
);

export const PageSection = ({ align = "center", children }) => {
  return (
    <Grid item md={12} align={align}>
      {children}
    </Grid>
  );
};

PageSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export const BackButton = ({ href }) => (
  <Link href={href}>
    <Button variant="contained" style={{ margin: "30px 0px" }}>
      Back
    </Button>
  </Link>
);

BackButton.propTypes = {
  href: PropTypes.string.isRequired
};
