import Layout from "../components/Layout";
import FoodCard from "../components/foodCard";

const Index = props => (
  <Layout>
    <FoodCard />
  </Layout>
);

Index.getInitialProps = async function(context) {
  return {};
};

export default Index;
