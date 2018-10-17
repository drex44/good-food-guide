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

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 500
  }
});

const dataSet = (data, queryKey) => {
  if (data.searchKey == queryKey) {
    return (
      <div>
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
      </div>
    );
  }
};

const FoodDetails = withRouter(props => (
  <Layout>
    {Data.map((data, index) => dataSet(data, props.router.query.disease))}
  </Layout>
));

export default FoodDetails;
