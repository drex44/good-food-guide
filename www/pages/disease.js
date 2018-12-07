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
        <Grid item xs={12} md={12} lg={12} align="center">
          <Breadcrumb />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          lg={5}
          align="center"
          style={{ paddingTop: "23px" }}
        >
          <Image src={data.image} alt={data.searchKey} />
        </Grid>
        <Grid item xs={12} md={6} lg={6} style={{ padding: "15px" }}>
          <Typography
            variant="h4"
            color="primary"
            style={{ marginBottom: "15px" }}
          >
            {data.name}
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "15px" }}>
            {data.description}
          </Typography>
          <Typography variant="h5">Symptoms</Typography>
          {data.symptoms.map(symps => (
            <div>
              <Typography variant="subtitle1" style={{ marginTop: "15px" }}>
                {symps.description}
              </Typography>
              <ul>
                {symps.symptoms.map(symptoms => (
                  <li style={{ marginLeft: "25px" }}>
                    <Typography variant="subtitle1">{symptoms}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {data.goodFoods.vegan.length > 0 ? (
            <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
              Veg foods:
            </Typography>
          ) : null}
          <FoodList goodFoods={{ vegan: data.goodFoods.vegan }} />
          {data.goodFoods.nonVegan.length > 0 ? (
            <Typography variant="subtitle1">Non Veg foods:</Typography>
          ) : null}
          <FoodList goodFoods={{ nonVegan: data.goodFoods.nonVegan }} />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          align="center"
          style={{ margin: "5em 0em" }}
        >
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
