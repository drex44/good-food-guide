import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

class FoodDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { diseases: [] };
  }

  componentDidMount = () => {
    // TODO: fetch diseases from algolia
    let diseases = [
      { title: "High Blood Pressure", searchKey: "high-blood-pressure" },
      { title: "Heart Disease", searchKey: "heart-disease" },
      { title: "Menstrual Cramps", searchKey: "menstrual-cramps" }
    ];
    this.setState({
      diseases: diseases
    });
  };

  render() {
    const food = this.props.food;
    const { diseases } = this.state;
    return (
      <Grid container>
        <PageSection>
          <Typography
            variant="h4"
            color="primary"
            style={{ margin: "15px 0px 25px 0px" }}
          >
            {food}
          </Typography>
        </PageSection>
        <PageSection>
          <Typography variant="h5">
            This food helps in below diseases:
            <DiseaseList diseases={diseases} />
          </Typography>
        </PageSection>
        <br />
        <PageSection>
          <Typography variant="h4" style={{ margin: "50px 0px" }}>
            Development in progress...
          </Typography>
        </PageSection>
        <PageSection>
          <Link href="/">
            <Button variant="contained" style={{ marginTop: "4em" }}>
              Back
            </Button>
          </Link>
        </PageSection>
      </Grid>
    );
  }
}

FoodDetails.propTypes = {
  food: PropTypes.string.isRequired
};

FoodDetails.defaultProps = {
  food: "Salmon"
};

const PageSection = props => {
  return (
    <Grid xs={12} item align="center">
      {props.children}
    </Grid>
  );
};

PageSection.propTypes = {
  children: PropTypes.object.isRequired
};

const DiseaseList = props => {
  const { diseases } = props;
  return (
    <Grid lg={3} md={4} sm={8} xs={10}>
      <List component="nav">
        {diseases.map(disease => (
          <DiseaseListItem disease={disease} />
        ))}
      </List>
    </Grid>
  );
};

DiseaseList.propTypes = {
  diseases: PropTypes.array.isRequired
};

const DiseaseListItem = props => {
  const { disease } = props;
  return (
    <ListItem button>
      <Link
        href={{
          pathname: "/disease",
          query: { disease: disease.searchKey }
        }}
      >
        <ListItemText primary={disease.title} />
      </Link>
    </ListItem>
  );
};

DiseaseListItem.propTypes = {
  disease: PropTypes.object.isRequired
};

export default FoodDetails;
