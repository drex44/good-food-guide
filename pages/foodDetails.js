import React from "react";
import Layout from "../components/layout/Layout";
import FoodCard from "../components/food/FoodCard";

const dummy_data = [
  {
    title: "Bananas",
    image: ""
  }
];

class FoodTreatment extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <Layout>
        <FoodCard foodData={dummy_data} />
      </Layout>
    );
  }
}

export default FoodTreatment;
