import Layout from "../components/Layout";
import React from "react";
import Jumbotron from "../components/Jumbotron";
import DiseaseCard from "../components/DiseaseCard";

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
        <Jumbotron />
        <DiseaseCard foodData={dummy_data} />
      </Layout>
    );
  }
}

export default FoodTreatment;
