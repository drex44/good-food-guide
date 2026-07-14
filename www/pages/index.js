import React from "react";
import Layout from "../components/layout/Layout";
import DiseaseCard from "../components/disease/DiseaseCard";
import Jumbotron from "../components/layout/Jumbotron";
import { getAllDiseases } from "../modules/api";
import Grid from "@mui/material/Grid";

const Index = ({ FoodData }) => (
  <Layout>
    <Jumbotron />
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
  return {
    FoodData: data
  };
};

export default Index;
