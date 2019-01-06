import Layout from "../components/layout/Layout";
import DiseaseCard from "../components/disease/DiseaseCard";
import Jumbotron from "../components/layout/Jumbotron";
import { getAllDiseases } from "../modules/api";
import { Grid, withStyles } from "@material-ui/core";

const styles = () => ({
  container: {
    padding: "2%",
    width: "100%"
  },
  diseaseCard: {
    display: "flex"
  }
});

const Index = ({ classes, FoodData }) => (
  <Layout>
    <Jumbotron />
    <Grid container spacing={8} className={classes.container}>
      {FoodData.map((disease, index) => (
        <Grid
          item
          key={disease.searchKey}
          xs={12}
          md={6}
          lg={3}
          className={classes.diseaseCard}
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

export default withStyles(styles)(Index);
