import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Typography, Grid, withStyles, Button } from "@material-ui/core";

const pageTitleStyles = theme => ({
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
  }
});

const PageTitle = props => {
  const { classes } = props;
  return (
    <Typography
      variant="h2"
      align={props.align ? props.align : "center"}
      color="primary"
      className={classes.title}
    >
      {props.children}
    </Typography>
  );
};

PageTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export const StyledPageTitle = withStyles(pageTitleStyles)(PageTitle);

const subtitleStyles = theme => ({
  subtitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.35em"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.75em"
    }
  }
});

const Subtitle = props => {
  const { classes } = props;
  return (
    <Typography variant="subtitle1" align="center" className={classes.subtitle}>
      {props.children}
    </Typography>
  );
};

Subtitle.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export const StyledSubtitle = withStyles(subtitleStyles)(Subtitle);

const paragraphStyles = theme => ({
  paragraph: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75em"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.95em"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1em"
    }
  }
});

const Paragraph = props => {
  const { classes } = props;
  return (
    <Typography
      variant="subtitle1"
      style={{ margin: "10px 0px" }}
      className={classes.paragraph}
    >
      {props.children}
    </Typography>
  );
};

export const StyledParagraph = withStyles(paragraphStyles)(Paragraph);

const paragraphTitleStyles = theme => ({
  paragraphTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.65em"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.75em"
    }
  }
});

const ParagraphTitle = props => {
  const { classes } = props;
  return (
    <Typography variant="h2" color="primary" className={classes.paragraphTitle}>
      {props.children}
    </Typography>
  );
};

export const StyledParagraphTitle = withStyles(paragraphTitleStyles)(
  ParagraphTitle
);

export const PageSection = props => {
  return (
    <Grid item md={12} align={props.align ? props.align : "center"}>
      {props.children}
    </Grid>
  );
};

PageSection.propTypes = {
  children: PropTypes.object.isRequired
};

export const BackButton = props => {
  return (
    <Link href={props.href}>
      <Button variant="contained" style={{ margin: "30px 0px" }}>
        Back
      </Button>
    </Link>
  );
};

BackButton.propTypes = {
  href: PropTypes.string.isRequired
};
