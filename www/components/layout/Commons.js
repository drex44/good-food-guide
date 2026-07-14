import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export const StyledPageTitle = ({ align = "center", children }) => (
  <Typography
    variant="h2"
    align={align}
    color="primary"
    sx={{
      fontSize: { xs: "1.75em", md: "2.75em", lg: "3.75em" },
      textAlign: { xs: "center" }
    }}
  >
    {children}
  </Typography>
);

StyledPageTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export const StyledSubtitle = ({ children }) => (
  <Typography
    variant="subtitle1"
    align="center"
    sx={{ fontSize: { xs: "1em", md: "1.35em", lg: "1.75em" } }}
  >
    {children}
  </Typography>
);

StyledSubtitle.propTypes = {
  children: PropTypes.string.isRequired
};

export const StyledParagraph = ({ component, children }) => (
  <Typography
    variant="subtitle1"
    component={component}
    sx={{
      margin: "10px 0px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: { xs: "0.75em", md: "0.95em", lg: "1em" }
    }}
  >
    {children}
  </Typography>
);

export const StyledParagraphTitle = ({ children }) => (
  <Typography
    variant="h2"
    color="primary"
    sx={{ fontSize: { xs: "1.5em", md: "1.65em", lg: "1.75em" } }}
  >
    {children}
  </Typography>
);

export const PageSection = ({ align = "center", children }) => {
  return (
    <Grid size={{ md: 12 }} align={align}>
      {children}
    </Grid>
  );
};

PageSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export const BackButton = ({ href }) => (
  <Button
    component={Link}
    href={href}
    variant="contained"
    style={{ margin: "30px 0px" }}
  >
    Back
  </Button>
);

BackButton.propTypes = {
  href: PropTypes.string.isRequired
};
