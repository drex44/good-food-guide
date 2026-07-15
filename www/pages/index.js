import React, { useState, useMemo } from "react";
import Layout from "../components/layout/Layout";
import DiseaseCard from "../components/disease/DiseaseCard";
import Jumbotron from "../components/layout/Jumbotron";
import { getAllDiseases, getAllFoods } from "../modules/api";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import SortIcon from "@mui/icons-material/Sort";

const SORT_OPTIONS = [
  { value: "az", label: "A → Z" },
  { value: "za", label: "Z → A" },
  { value: "most-foods", label: "Most Foods" }
];

function sortDiseases(diseases, sortBy) {
  const sorted = [...diseases];
  if (sortBy === "az") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "za") {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "most-foods") {
    sorted.sort(
      (a, b) =>
        b.goodFoods.vegan.length + b.goodFoods.nonVegan.length -
        (a.goodFoods.vegan.length + a.goodFoods.nonVegan.length)
    );
  }
  return sorted;
}

const Index = ({ FoodData, foodCount }) => {
  const [sortBy, setSortBy] = useState("az");

  const sorted = useMemo(() => sortDiseases(FoodData, sortBy), [FoodData, sortBy]);

  return (
    <Layout>
      <Jumbotron diseaseCount={FoodData.length} foodCount={foodCount} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: "2%",
          pt: 1,
          pb: 0.5,
          flexWrap: "wrap"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "text.secondary" }}>
          <SortIcon fontSize="small" />
          <Typography variant="body2" color="text.secondary">
            Sort:
          </Typography>
        </Box>
        <ToggleButtonGroup
          value={sortBy}
          exclusive
          onChange={(_, val) => { if (val) setSortBy(val); }}
          size="small"
          aria-label="Sort conditions"
        >
          {SORT_OPTIONS.map(opt => (
            <ToggleButton key={opt.value} value={opt.value} aria-label={opt.label}>
              {opt.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      <Grid container spacing={1} sx={{ padding: "2%", width: "100%" }}>
        {sorted.map((disease, index) => (
          <Grid
            size={{ xs: 12, md: 6, lg: 3 }}
            key={disease.searchKey}
            sx={{ display: "flex" }}
          >
            <DiseaseCard disease={disease} index={index} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const data = await getAllDiseases();
  const foods = await getAllFoods();
  return {
    FoodData: data,
    foodCount: foods.length
  };
};

export default Index;
