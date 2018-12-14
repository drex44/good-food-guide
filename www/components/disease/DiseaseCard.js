import React, { Component } from "react";
import PropTypes from "prop-types";
import FoodList from "../food/FoodList";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Button,
  withStyles
} from "@material-ui/core";
import Link from "next/link";
import ShareModal from "../ShareModal";
import Highlight from "react-instantsearch-dom/dist/cjs/widgets/Highlight";

const styles = theme => ({
  root: {
    marginBottom: 15,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  cardHeader: { width: "100%" },
  cardContent: {
    background: "rgb(241, 241, 241)",
    minHeight: "300px"
  },
  cardImage: {
    height: 0,
    paddingTop: "25%"
  }
});

class DiseaseCard extends Component {
  render() {
    const { disease, classes } = this.props;
    return (
      <Card raised className={classes.root}>
        <div>
          <Link
            href={{
              pathname: "/disease",
              query: { disease: disease.searchKey }
            }}
          >
            <CardActionArea className={classes.cardHeader}>
              <CardMedia
                className={classes.cardImage}
                image={disease.image}
                title={disease.name}
              />
              <CardContent>
                {this.props.searchable ? (
                  <Highlight attribute="name" hit={disease} />
                ) : (
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="primary"
                  >
                    {disease.name}
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
          </Link>
          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle1" align="justify">
              {shortenText(disease.description, 0, 200) + " . . ."}
            </Typography>
            <Typography style={{ margin: "10px 0px" }}>
              <FoodList goodFoods={disease.goodFoods} />
            </Typography>
          </CardContent>
        </div>
        <DiseaseCardAction>
          <DiseaseCardLink>
            <ShareModal
              shareLink={`https://good-food-guide.now.sh/disease?disease=${
                disease.searchKey
              }`}
            />
          </DiseaseCardLink>
          <DiseaseCardLink>
            <Link
              href={{
                pathname: "/disease",
                query: { disease: disease.searchKey }
              }}
            >
              <Button color="primary">Learn More</Button>
            </Link>
          </DiseaseCardLink>
        </DiseaseCardAction>
      </Card>
    );
  }
}

DiseaseCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const shortenText = (text, startingPoint, maxLength) => {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
};

const DiseaseCardAction = props => {
  return (
    <CardActions>
      <Grid container align="center">
        {props.children}
      </Grid>
    </CardActions>
  );
};

DiseaseCardAction.propTypes = {
  children: PropTypes.array.isRequired
};

const DiseaseCardLink = props => {
  return (
    <Grid xs={6} item>
      {props.children}
    </Grid>
  );
};

DiseaseCardLink.propTypes = {
  children: PropTypes.object.isRequired
};

export default withStyles(styles)(DiseaseCard);
