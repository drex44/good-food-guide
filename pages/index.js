import Layout from "../components/Layout";
import FoodCard from "../components/FoodCard";
import FoodData from "../components/dataList";

const Index = props => (
  <Layout>
    <FoodCard FoodData={FoodData} />
  </Layout>
);

Index.getInitialProps = async function(context) {
  return {};
};

export default Index;
