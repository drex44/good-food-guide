import React, { Component } from "react";
import FoodList from "../food/FoodList";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import Link from "next/link";
import ShareModal from "../ShareModal";
import Highlight from "react-instantsearch-dom/dist/cjs/widgets/Highlight";

function shortenText(text, startingPoint, maxLength) {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}

class DiseaseCard extends Component {
  render() {
    const { disease } = this.props;
    return (
      <Card
        raised
        style={{
          marginBottom: 15,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <div>
          <Link
            href={{
              pathname: "/disease",
              query: { disease: disease.searchKey }
            }}
          >
            <CardActionArea style={{ width: "100%" }}>
              <CardMedia
                style={{ height: 0, paddingTop: "25%" }}
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
          <CardContent
            style={{
              background: "rgb(241, 241, 241)",
              minHeight: "300px"
            }}
          >
            <Typography variant="subtitle1" align="justify">
              {shortenText(disease.description, 0, 200) + " . . ."}
            </Typography>
            <Typography style={{ margin: "10px 0px" }}>
              <FoodList goodFoods={disease.goodFoods} />
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Grid container align="center">
            <Grid xs={6} item>
              <ShareModal
                shareLink={`https://good-food-guide.now.sh/disease?disease=${
                  disease.searchKey
                }`}
              />
            </Grid>
            <Grid xs={6} item>
              <Link
                href={{
                  pathname: "/disease",
                  query: { disease: disease.searchKey }
                }}
              >
                <Button color="primary">Learn More</Button>
              </Link>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

export default DiseaseCard;
