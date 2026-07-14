import Layout from "../components/layout/Layout";
import React from "react";
import Head from "next/head";
import Grid from "@mui/material/Grid";

const Suggestions = () => (
  <Layout title="Give Feedback | Good Food Guide">
    <Head>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
    </Head>
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
