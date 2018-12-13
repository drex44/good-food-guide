import React from "react";
import Layout from "../components/layout/Layout";
import FoodDetails from "../components/food/FoodDetails";
import { withRouter } from "next/router";
import { Typography } from "@material-ui/core";

class FoodTreatment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <FoodDetails food={this.props.router.query.food} />
      </Layout>
    );
  }
}

export default withRouter(FoodTreatment);
