import React from "react";
import Layout from "../components/layout/Layout";
import DiseaseCard from "../components/disease/DiseaseCard";
import Jumbotron from "../components/layout/Jumbotron";
import { getAllDiseases, getAllFoods } from "../modules/api";
import Grid from "@mui/material/Grid";

const Index = ({ FoodData, foodCount }) => (
  <Layout>
    <Jumbotron diseaseCount={FoodData.length} foodCount={foodCount} />
    <Grid container spacing={1} sx={{ padding: "2%", width: "100%" }}>
      {FoodData.map((disease, index) => (
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

Index.getInitialProps = async () => {
  const data = await getAllDiseases();
  const foods = await getAllFoods();
  return {
    FoodData: data,
    foodCount: foods.length
  };
};

export default Index;
