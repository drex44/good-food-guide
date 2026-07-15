import Layout from "../components/layout/Layout";
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PeopleIcon from "@mui/icons-material/People";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import SickIcon from "@mui/icons-material/Sick";
import {
  StyledPageTitle,
  StyledParagraph,
  StyledParagraphTitle,
  PageSection
} from "../components/layout/Commons";

const About = () => (
  <Layout title="About | Good Food Guide">
    <Grid
      container
      style={{ maxWidth: "900px", width: "100%" }}
      sx={{ padding: { xs: "10px", md: "20px" } }}
    >
      <Card raised sx={{ width: "100%", minWidth: 0 }}>
        <CardContent sx={{ padding: { xs: "15px", md: "25px" } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <HomeIcon color="primary" sx={{ fontSize: 40 }} />
            <StyledPageTitle align="left">About us</StyledPageTitle>
          </Box>
          <StyledParagraph>
            Good Food Guide is a free, open source project that helps you
            figure out what to eat when you&apos;re dealing with a health
            condition. Pick a disease to see its symptoms and the foods that
            can help, or start from a food and see which conditions it
            helps with.
          </StyledParagraph>

          <Divider sx={{ margin: "20px 0" }} />

          <StyledParagraphTitle>How it works</StyledParagraphTitle>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              padding: "15px 0"
            }}
          >
            <HowItWorksStep
              icon={SearchIcon}
              title="Search or browse"
              description="Look up a disease or food using the search bar, or browse the full list."
            />
            <HowItWorksStep
              icon={SickIcon}
              title="Check symptoms"
              description="See the symptoms for a condition to confirm you're in the right place."
            />
            <HowItWorksStep
              icon={RestaurantIcon}
              title="Find good foods"
              description="Get a list of foods that can help, split into vegetarian and non-vegetarian options."
            />
          </Box>

          <Divider sx={{ margin: "20px 0" }} />

          <StyledParagraph>
            This project is entirely open source and built by volunteers.
          </StyledParagraph>
          <Button
            target="_new"
            href="https://github.com/drex44/good-food-guide"
            variant="outlined"
            startIcon={<GitHubIcon />}
            sx={{ marginBottom: "10px" }}
          >
            View on GitHub
          </Button>

          <PageSection>
            <Stack
              direction="row"
              spacing={2}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "20px 0 0"
              }}
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
        </CardContent>
      </Card>
    </Grid>
  </Layout>
);

const HowItWorksStep = ({ icon: Icon, title, description }) => (
  <Box sx={{ flex: "1 1 200px", textAlign: "center" }}>
    <Icon color="primary" sx={{ fontSize: 36 }} />
    <Typography variant="h6" color="primary" sx={{ margin: "8px 0 4px" }}>
      {title}
    </Typography>
    <StyledParagraph>{description}</StyledParagraph>
  </Box>
);

HowItWorksStep.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default About;
