import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        background: "#9c27b0",
        padding: { xs: "16px 12px", sm: "20px 12px" }
      }}
    >
      <FooterColumn>
        <FooterTitle>Good Food Guide - An Open Source Project</FooterTitle>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>
          Crafted &lt;&#47;&gt; with love &hearts; by{" "}
          <FooterLink underline href="/contributors">
            amazing people!
          </FooterLink>
        </FooterTitle>
      </FooterColumn>
      <FooterColumn>
        <FooterLink href="/terms">Terms</FooterLink>
      </FooterColumn>
    </Grid>
  );
};

const FooterColumn = ({ children }) => (
  <Grid
    size={{ lg: 4, md: 4, sm: 4, xs: 12 }}
    sx={{ textAlign: "center", padding: { xs: "6px 0", sm: 0 } }}
  >
    {children}
  </Grid>
);

FooterColumn.prototype = {
  children: PropTypes.object.isRequired
};

const FooterTitle = ({ children }) => (
  <Typography variant="subtitle2" style={{ color: "#ffffff" }}>
    {children}
  </Typography>
);

FooterTitle.prototype = {
  children: PropTypes.object.isRequired
};

const FooterLink = ({ href, underline, children }) => (
  <Link
    href={href}
    style={{
      color: "#ffffff",
      margin: "0px",
      textDecoration: underline ? "underline" : "none",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    }}
  >
    {children}
  </Link>
);

FooterLink.prototype = {
  href: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default Footer;
