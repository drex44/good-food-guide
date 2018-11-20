import { withRouter } from "next/router";
import Data from "../components/dataList";
import Layout from "../components/layout/Layout";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FoodList from "../components/food/FoodList";
import Image from "../components/disease/ContainerImage";
import Breadcrumb from "../components/layout/Breadcrumb";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { getDisease } from "../modules/api";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 500
  }
});

const FoodDetails = props => {
  let data = props.disease[0];
  return (
    <Layout>
      <Breadcrumb />
      <Grid container spacing={8}>
        <Grid item xs={12} align="center">
          <Image src={data} />
          <Typography
            variant="subtitle1"
            gutterBottom
            color="primary"
            style={{ fontSize: "30px" }}
          >
            {data.sick}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <FoodList cardData={data} />
          </Typography>
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
