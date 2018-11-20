import React from "react";
import Layout from "../components/layout/Layout";
import FoodCard from "../components/food/FoodCard";
import { withRouter } from "next/router";

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
        <FoodCard food={this.props.router.query.food} />
      </Layout>
    );
  }
}

export default withRouter(FoodTreatment);
