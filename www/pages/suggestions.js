import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Suggestions = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Layout title="Give Feedback | Good Food Guide">
      <Head>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
      </Head>
      <Grid
        size={{ md: 10, xs: 12 }}
        sx={{ margin: "2%", width: { xs: "100%", md: "65%" } }}
      >
        <Box sx={{ position: "relative" }}>
          {!loaded && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2
              }}
            >
              <CircularProgress color="primary" />
              <Typography color="text.secondary">
                Loading feedback form...
              </Typography>
            </Box>
          )}
          <iframe
            className="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrhWeK9YFxFVPuoY?backgroundColor=purple"
            frameBorder="0"
            width="100%"
            height="917"
            style={{
              background: "transparent",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s"
            }}
            onLoad={() => setLoaded(true)}
          />
        </Box>
      </Grid>
    </Layout>
  );
};

export default Suggestions;
