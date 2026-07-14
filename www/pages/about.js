import Layout from "../components/layout/Layout";
import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PeopleIcon from "@mui/icons-material/People";
import {
  StyledPageTitle,
  StyledSubtitle,
  PageSection
} from "../components/layout/Commons";

const About = () => (
  <Layout title="About | Good Food Guide">
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

      <PageSection>
        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          sx={{ flexWrap: "wrap", justifyContent: "center", padding: "20px 0" }}
        >
          <Button
            component={Link}
            href="/"
            variant="outlined"
            startIcon={<HomeIcon />}
          >
            Browse Diseases
          </Button>
          <Button
            component={Link}
            href="/foodDetails"
            variant="outlined"
            startIcon={<RestaurantIcon />}
          >
            Browse Foods
          </Button>
          <Button
            component={Link}
            href="/contributors"
            variant="outlined"
            startIcon={<PeopleIcon />}
          >
            Contributors
          </Button>
          <Button
            component={Link}
            href="/suggestions"
            variant="outlined"
            startIcon={<FeedbackIcon />}
          >
            Give Feedback
          </Button>
        </Stack>
      </PageSection>
    </Grid>
  </Layout>
);

export default About;
