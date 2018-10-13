import { withRouter } from "next/router";
import Data from "./../components/dataList";
import Layout from "../components/Layout";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FoodList from "../components/FoodList";
import Image from "../components/ContainerImage";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 500
  },
});

const dataSet = (data, queryKey) => {
  if (data.searchKey == queryKey) {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12} align="center">
          <Image src = {data} />
          <Typography variant="subtitle1" gutterBottom color="primary" style={{fontSize: "30px",}}>
            {data.sick}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <FoodList cardData={data} />
          </Typography>
        </Grid>
      </Grid>
    );
  }
};

const FoodDetails = withRouter(props => (
  <Layout>
    <Typography
      component="h2"
      variant="h3"
      gutterBottom
      color="primary"
      align="center"
      style={{ fontSize: "2em" }}
    >
      {props.router.query.title}
    </Typography>
    {Data.map((data, index) => dataSet(data, props.router.query.disease))}
  </Layout>
));

export default FoodDetails;
