import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { green } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Link from "next/link";

import Layout from "../components/layout/Layout";
import DiseaseCard from "../components/disease/DiseaseCard";
import {
  PageSection,
  StyledPageTitle,
  StyledParagraph,
  BackButton
} from "../components/layout/Commons";
import { getAllFoods, getDiseasesByFood } from "../modules/api";

const groupByLetter = foods => {
  const groups = {};
  foods.forEach(name => {
    const letter = name[0].toUpperCase();
    (groups[letter] = groups[letter] || []).push(name);
  });
  return groups;
};

const BrowseFoods = ({ foods }) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q.length === 0
      ? foods
      : foods.filter(name => name.toLowerCase().includes(q));
  }, [foods, query]);

  const groups = useMemo(() => groupByLetter(filtered), [filtered]);
  const letters = Object.keys(groups).sort();

  return (
    <Layout title="Browse Foods | Good Food Guide">
      <Grid
        container
        style={{ maxWidth: "1100px", width: "100%" }}
        sx={{ padding: { xs: "10px", md: "20px" } }}
      >
        <Card raised sx={{ width: "100%", minWidth: 0 }}>
          <CardContent sx={{ padding: { xs: "15px", md: "25px" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <RestaurantIcon color="primary" sx={{ fontSize: 40 }} />
              <StyledPageTitle align="left">Browse Foods</StyledPageTitle>
            </Box>
            <StyledParagraph>
              {`${foods.length} foods, and counting — pick one to see which conditions it helps with.`}
            </StyledParagraph>

            <TextField
              fullWidth
              placeholder="Filter foods..."
              value={query}
              onChange={event => setQuery(event.target.value)}
              sx={{ margin: "20px 0" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="disabled" />
                    </InputAdornment>
                  )
                }
              }}
            />

            {letters.length === 0 ? (
              <StyledParagraph>
                No foods match &quot;{query}&quot;.
              </StyledParagraph>
            ) : (
              letters.map(letter => (
                <Box key={letter} sx={{ marginBottom: "20px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        color: "primary.main",
                        fontWeight: "bold",
                        fontSize: "1.1em",
                        minWidth: "24px"
                      }}
                    >
                      {letter}
                    </Box>
                    <Divider sx={{ flexGrow: 1 }} />
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{ flexWrap: "wrap", padding: "10px 0" }}
                  >
                    {groups[letter].map(name => (
                      <Chip
                        key={name}
                        label={name}
                        clickable
                        component={Link}
                        href={{ pathname: "/foodDetails", query: { food: name } }}
                        sx={{
                          textTransform: "capitalize",
                          backgroundColor: green[800],
                          color: "white",
                          "&:hover": { backgroundColor: green[900] }
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              ))
            )}
          </CardContent>
        </Card>

        <PageSection>
          <BackButton href="/" />
        </PageSection>
      </Grid>
    </Layout>
  );
};

BrowseFoods.propTypes = {
  foods: PropTypes.array.isRequired
};

const FoodDiseases = ({ food, diseases }) => (
  <Layout title={`${food} | Good Food Guide`}>
    <Grid
      container
      style={{ maxWidth: "1100px", width: "100%" }}
      sx={{ padding: { xs: "10px", md: "20px" } }}
    >
      <Card raised sx={{ width: "100%", minWidth: 0, marginBottom: "20px" }}>
        <CardContent sx={{ padding: { xs: "15px", md: "25px" } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <RestaurantIcon color="primary" sx={{ fontSize: 40 }} />
            <StyledPageTitle align="left">{food}</StyledPageTitle>
          </Box>
          <StyledParagraph>
            {diseases.length > 0
              ? `Helps with ${diseases.length} condition${diseases.length === 1 ? "" : "s"}:`
              : "No diseases found recommending this food yet."}
          </StyledParagraph>
        </CardContent>
      </Card>

      {diseases.length > 0 && (
        <Grid container spacing={1} sx={{ width: "100%" }}>
          {diseases.map((disease, index) => (
            <Grid
              size={{ xs: 12, md: 6, lg: 4 }}
              key={disease.searchKey}
              sx={{ display: "flex" }}
            >
              <DiseaseCard disease={disease} />
            </Grid>
          ))}
        </Grid>
      )}

      <PageSection>
        <BackButton href="/foodDetails" />
      </PageSection>
    </Grid>
  </Layout>
);

FoodDiseases.propTypes = {
  food: PropTypes.string.isRequired,
  diseases: PropTypes.array.isRequired
};

const FoodDetails = ({ food, foods, diseases }) =>
  food ? (
    <FoodDiseases food={food} diseases={diseases} />
  ) : (
    <BrowseFoods foods={foods} />
  );

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
