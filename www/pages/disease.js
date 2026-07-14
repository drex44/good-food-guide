import React from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";
import SickIcon from "@mui/icons-material/Sick";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FoodList from "../components/food/FoodList";
import Image from "../components/disease/ImageContainer";
import Breadcrumb from "../components/layout/Breadcrumb";
import ShareModal from "../components/ShareModal";
import { getDisease } from "../modules/api";
import Error404 from "../components/Error/Error404";
import {
  BackButton,
  StyledParagraph,
  StyledParagraphTitle,
  PageSection,
  StyledPageTitle
} from "../components/layout/Commons";
import PropTypes from "prop-types";

const DiseaseDetails = ({ disease }) => {
  if (disease.length <= 0) {
    return <Error404 />;
  }
  let data = disease[0];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: data.name,
    description: data.description,
    mainEntity: {
      "@type": "MedicalCondition",
      name: data.name,
      description: data.description,
      signOrSymptom: data.symptoms.flatMap(group =>
        group.symptoms.map(symptom => ({
          "@type": "MedicalSignOrSymptom",
          name: symptom
        }))
      )
    }
  };

  return (
    <Layout
      title={`${data.name} | Good Food Guide`}
      description={truncate(data.description, 160)}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Grid
        container
        style={{ maxWidth: "1100px", width: "100%" }}
        sx={{
          padding: { xs: "10px", md: "20px" }
        }}
      >
        <PageSection>
          <Breadcrumb />
        </PageSection>

        <Card raised sx={{ width: "100%", minWidth: 0 }}>
          <Grid container>
            <Grid
              size={{ xs: 12, md: 6, lg: 6 }}
              align="center"
              sx={{ paddingTop: "23px", paddingX: "15px" }}
            >
              <Image src={data.image} alt={data.searchKey} />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ minWidth: 0 }}>
              <CardContent sx={{ padding: { xs: "15px", md: "25px" } }}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1
                  }}
                >
                  <StyledPageTitle align="left">{data.name}</StyledPageTitle>
                  <ShareModal
                    shareLink={`/disease?disease=${data.searchKey}`}
                  />
                </Box>
                <StyledParagraph>{data.description}</StyledParagraph>

                <Divider sx={{ margin: "20px 0" }} />

                <SectionTitle icon={SickIcon}>Symptoms</SectionTitle>
                {data.symptoms.map((symptoms, index) => (
                  <Symptoms key={index} symptoms={symptoms} />
                ))}

                <Divider sx={{ margin: "20px 0" }} />

                <SectionTitle icon={RestaurantIcon}>Good Foods</SectionTitle>
                <GoodFoods goodFoods={data.goodFoods} />
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        <PageSection>
          <BackButton href="/" />
        </PageSection>
      </Grid>
    </Layout>
  );
};

DiseaseDetails.propTypes = {
  disease: PropTypes.array.isRequired
};

DiseaseDetails.getInitialProps = async function(context) {
  const { disease } = context.query;
  let data = await getDisease(disease);
  return { disease: data };
};

const truncate = (text, maxLength) =>
  text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;

const SectionTitle = ({ icon: Icon, children }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Icon color="primary" />
    <StyledParagraphTitle>{children}</StyledParagraphTitle>
  </Box>
);

SectionTitle.propTypes = {
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.string.isRequired
};

const Symptoms = props => {
  const { symptoms } = props;
  return (
    <React.Fragment>
      <StyledParagraph>{symptoms.description}</StyledParagraph>
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap", marginBottom: "10px" }}>
        {symptoms.symptoms.map((symptom, index) => (
          <Chip
            key={index}
            label={symptom}
            variant="outlined"
            size="small"
            sx={{ color: green[800], borderColor: green[800] }}
          />
        ))}
      </Stack>
    </React.Fragment>
  );
};

Symptoms.propTypes = {
  symptoms: PropTypes.object.isRequired
};

const GoodFoods = props => {
  const { goodFoods } = props;
  return (
    <React.Fragment>
      <GoodFoodList title="Veg Foods:" foods={{ vegan: goodFoods.vegan }} />
      <GoodFoodList
        title="Non veg Foods:"
        foods={{ nonVegan: goodFoods.nonVegan }}
      />
      {goodFoods.vegan.length <= 0 && goodFoods.nonVegan.length <= 0 && (
        <StyledParagraph>
          No food recommendations available yet for this condition.
        </StyledParagraph>
      )}
    </React.Fragment>
  );
};

GoodFoods.propTypes = { goodFoods: PropTypes.object.isRequired };

const GoodFoodList = props => {
  const { title, foods } = props;
  return (
    <React.Fragment>
      {foods[Object.keys(foods)].length > 0 && (
        <StyledParagraph>{title}</StyledParagraph>
      )}
      <FoodList goodFoods={foods} />
    </React.Fragment>
  );
};

GoodFoodList.propTypes = {
  title: PropTypes.string.isRequired,
  foods: PropTypes.object.isRequired
};

export default DiseaseDetails;
