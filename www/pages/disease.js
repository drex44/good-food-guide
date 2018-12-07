import Layout from "../components/layout/Layout";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FoodList from "../components/food/FoodList";
import Image from "../components/disease/ContainerImage";
import Breadcrumb from "../components/layout/Breadcrumb";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { getDisease } from "../modules/api";
import Error404 from "../components/Error/Error404";

const FoodDetails = props => {
  if (props.disease.length <= 0) {
    return <Error404 />;
  }
  let data = props.disease[0];
  return (
    <Layout>
      <Grid container>
        <Grid
          container
          xs={12}
          style={{ paddingLeft: "2em", margin: "3em 0em 0em 3em" }}
        >
          <Breadcrumb />
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h4" color="primary" style={{ margin: "1em" }}>
            {data.sick}
          </Typography>
        </Grid>
        <Grid item xs={5} align="center">
          <Image src={data.image} alt={data.searchKey} />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="subtitle1">Veg foods:</Typography>
          <FoodList goodFoods={{ vegan: data.goodFoods.vegan }} />
          <Typography variant="subtitle1">Non Veg foods:</Typography>
          <FoodList goodFoods={{ nonVegan: data.goodFoods.nonVegan }} />
        </Grid>
        <Grid item xs={12} align="center" style={{ marginTop: "5em" }}>
          <Link href="/">
            <Button variant="contained">Back</Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};

FoodDetails.getInitialProps = async function(context) {
  const { disease } = context.query;
  let data = await getDisease(disease);
  return { disease: data };
};

export default FoodDetails;
