import React from "react";
import fetch from "isomorphic-fetch";
import Layout from "../components/layout/Layout";
import ContributorList from "../components/contributors/ContributorList";
import { StyledPageTitle, StyledSubtitle } from "../components/layout/Commons";
import Grid from "@mui/material/Grid";

const Contributors = ({ contributors }) => (
  <Layout>
    <Grid size={{ lg: 8, xs: 10 }} style={{ margin: "2%" }}>
      <StyledPageTitle>Contributors</StyledPageTitle>
      <StyledSubtitle>Amazing people who helped this project</StyledSubtitle>
      <br />
      <ContributorList contributors={contributors} />
    </Grid>
  </Layout>
);

Contributors.getInitialProps = async function(context) {
  const response = await fetch(
    "https://api.github.com/repos/drex44/good-food-guide/contributors"
  );
  const data = await response.json();
  return {
    contributors: data
  };
};

export default Contributors;
