import Layout from "../components/layout/Layout";
import DiseaseCard from "../components/disease/DiseaseCard";
import Jumbotron from "../components/layout/Jumbotron";
import { getAllDiseases } from "../modules/api";
import { Grid } from "@material-ui/core";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: props.FoodData,
      items: []
    };
  }
  componentDidMount = () => {
    this.setState({ items: this.state.initialItems });
  };

  render() {
    return (
      <Layout>
        <Jumbotron />
        <section style={{ padding: 30 }}>
          <Grid container spacing={8}>
            {this.state.items.map((disease, index) => (
              <Grid
                key={disease.searchKey}
                item
                style={{ display: "flex" }}
                xs={12}
                md={6}
                lg={3}
              >
                <DiseaseCard disease={disease} index={index} />
              </Grid>
            ))}
          </Grid>
        </section>
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
