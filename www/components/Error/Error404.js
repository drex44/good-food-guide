import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Layout from "../layout/Layout";

export default () => (
  <Layout>
    <Grid style={{ margin: "5em" }} align="center">
      <Typography variant="h3" style={{ margin: "1em" }} color="primary">
        404
      </Typography>
      <Typography variant="h5">Page not found</Typography>
    </Grid>
  </Layout>
);
