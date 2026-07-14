import Layout from "../components/layout/Layout";
import React from "react";
import Grid from "@mui/material/Grid";

const Suggestions = () => (
  <Layout>
    <Grid
      size={{ md: 10, xs: 12 }}
      sx={{ margin: "2%", width: { xs: "100%", md: "65%" } }}
    >
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrhWeK9YFxFVPuoY?backgroundColor=purple"
        frameBorder="0"
        width="100%"
        height="917"
        style={{ background: "transparent" }}
      />
    </Grid>
  </Layout>
);

export default Suggestions;
