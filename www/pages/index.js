import Layout from "../components/layout/Layout";
import DiseaseCard from "../components/disease/DiseaseCard";
import Jumbotron from "../components/layout/Jumbotron";
import { getAllDiseases } from "../modules/api";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: props.FoodData,
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
    this.setState({ items });
  };
  componentDidMount = () => {
    this.setState({ items: this.state.initialItems });
  };

  render() {
    return (
      <Layout filterList={this.filterList}>
        <Jumbotron />
        <DiseaseCard DiseaseData={this.state.items} />
      </Layout>
    );
  }
}

Index.getInitialProps = async () => {
  const data = await getAllDiseases();
  return {
    FoodData: data
  };
};

export default Index;
