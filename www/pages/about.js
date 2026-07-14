import Layout from "../components/layout/Layout";
import React from "react";
import Grid from "@mui/material/Grid";
import { StyledPageTitle, StyledSubtitle } from "../components/layout/Commons";

const About = () => (
  <Layout>
    <Grid style={{ margin: "2%" }}>
      <StyledPageTitle>About us</StyledPageTitle>
      <StyledSubtitle>
        An open source project to show what to eat when you're ill
      </StyledSubtitle>
      <StyledSubtitle>
        Check us out on{" "}
        <a target="_new" href="https://github.com/drex44/good-food-guide">
          Github
        </a>
      </StyledSubtitle>
    </Grid>
  </Layout>
);

export default About;
