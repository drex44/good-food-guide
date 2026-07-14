import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Link from "next/link";

import Layout from "../components/layout/Layout";
import {
  PageSection,
  StyledSubtitle,
  StyledPageTitle,
  BackButton
} from "../components/layout/Commons";
import DiseaseList from "../components/disease/DiseaseList";
import { getAllFoods, getDiseasesByFood } from "../modules/api";

const FoodDetails = ({ food, foods, diseases }) => {
  if (!food) {
    return (
      <Layout title="Food Details | Good Food Guide">
        <Grid container style={{ margin: "2%" }}>
          <PageSection>
            <StyledPageTitle>Browse Foods</StyledPageTitle>
            <StyledSubtitle>
              Pick a food to see which conditions it helps with
            </StyledSubtitle>
          </PageSection>

          <PageSection>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "20px 5%"
              }}
            >
              {foods.map(name => (
                <Chip
                  key={name}
                  label={name}
                  clickable
                  color="secondary"
                  component={Link}
                  href={{ pathname: "/foodDetails", query: { food: name } }}
                  sx={{ textTransform: "capitalize" }}
                />
              ))}
            </Stack>
          </PageSection>

          <PageSection>
            <BackButton href="/" />
          </PageSection>
        </Grid>
      </Layout>
    );
  }

  const diseaseItems = diseases.map(disease => ({
    title: disease.name,
    searchKey: disease.searchKey
  }));

  return (
    <Layout title={`${food} | Good Food Guide`}>
      <Grid container style={{ margin: "2%" }}>
        <PageSection>
          <StyledPageTitle>{food}</StyledPageTitle>
        </PageSection>

        <PageSection>
          {diseaseItems.length > 0 ? (
            <React.Fragment>
              <StyledSubtitle>This food helps with:</StyledSubtitle>
              <DiseaseList diseases={diseaseItems} />
            </React.Fragment>
          ) : (
            <StyledSubtitle>
              No diseases found recommending this food yet.
            </StyledSubtitle>
          )}
        </PageSection>

        <PageSection>
          <BackButton href="/foodDetails" />
        </PageSection>
      </Grid>
    </Layout>
  );
};

FoodDetails.propTypes = {
  food: PropTypes.string,
  foods: PropTypes.array.isRequired,
  diseases: PropTypes.array.isRequired
};

FoodDetails.getInitialProps = async function(context) {
  const { food } = context.query;
  if (!food) {
    const foods = await getAllFoods();
    return { food: null, foods, diseases: [] };
  }
  const diseases = await getDiseasesByFood(food);
  return { food, foods: [], diseases };
};

export default FoodDetails;
