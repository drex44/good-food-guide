import Layout from "../components/Layout";
import FoodCard from "../components/FoodCard";
import FoodData from "../components/dataList";
import Jumbotron from "../components/Jumbotron";

const Index = props => (
  <Layout> 
    <Jumbotron />
    <FoodCard FoodData={FoodData} />
  </Layout>
);

Index.getInitialProps = async function(context) {
  return {};
};

export default Index;
