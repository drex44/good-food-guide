import React from "react";
import PropTypes from "prop-types";
import { Grid, withStyles } from "@material-ui/core";

import Layout from "../components/layout/Layout";
import {
  PageSection,
  StyledSubtitle,
  StyledPageTitle,
  BackButton
} from "../components/layout/Commons";
import DiseaseList from "../components/disease/DiseaseList";

const styles = () => ({
  root: { margin: "2%" }
});

const FoodDetails = ({ food = "Salmon", diseases, classes }) => (
  <Layout>
    <Grid container className={classes.root}>
      <PageSection>
        <StyledPageTitle>{food}</StyledPageTitle>
      </PageSection>

      <PageSection>
        <StyledSubtitle>This food helps in below diseases:</StyledSubtitle>
        <DiseaseList diseases={diseases} />
      </PageSection>

      <PageSection>
        <StyledSubtitle>Development in progress...</StyledSubtitle>
      </PageSection>

      <PageSection>
        <BackButton href="/" />
      </PageSection>
    </Grid>
  </Layout>
);

FoodDetails.propTypes = {
  food: PropTypes.string,
  diseases: PropTypes.array.isRequired
};

FoodDetails.getInitialProps = async function(context) {
  const { food } = context.query;

  // TODO: fetch diseases from algolia
  let diseases = [
    { title: "High Blood Pressure", searchKey: "high-blood-pressure" },
    { title: "Heart Disease", searchKey: "heart-disease" },
    { title: "Menstrual Cramps", searchKey: "menstrual-cramps" }
  ];
  return { food, diseases };
};

export default withStyles(styles)(FoodDetails);
