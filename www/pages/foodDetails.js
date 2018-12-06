import React from "react";
import Layout from "../components/layout/Layout";
import FoodCard from "../components/food/FoodCard";
import { withRouter } from "next/router";
import { Typography } from "@material-ui/core";

const dummy_data = {
  title: "Bananas",
  image: ""
};

class FoodTreatment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Typography style={{ fontSize: "20px" }}>
          Development in progress
        </Typography>
        <FoodCard food={this.props.router.query.food} />
      </Layout>
    );
  }
}

export default withRouter(FoodTreatment);
