import Layout from "../components/Layout";
import FoodCard from "../components/FoodCard";
import FoodData from "../components/dataList";
import Jumbotron from "../components/Jumbotron";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: FoodData,
      items: []
    };
  }
  filterList = event => {
    let items = this.state.initialItems;
    items = items.filter(item => {
      return (
        item.sick.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: items });
  };
  componentDidMount = () => {
    this.setState({ items: this.state.initialItems });
  };

  render() {
    return (
      <Layout filterList={this.filterList}>
        <Jumbotron />
        <FoodCard FoodData={this.state.items} />
      </Layout>
    );
  }
}

Index.getInitialProps = async function(context) {
  return {};
};

export default Index;
