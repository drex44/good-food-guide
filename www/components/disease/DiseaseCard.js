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

class DiseaseCard extends Component {
  render() {
    const { disease } = this.props;
    return (
      <Grid
        key={disease.searchKey}
        item
        xs={12}
        md={6}
        lg={3}
        style={{ display: "flex" }}
      >
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
            <CardActionArea style={{ width: "100%" }}>
              <CardMedia
                style={{ height: 0, paddingTop: "25%" }}
                image={disease.image}
                title={disease.sick}
              />
              <CardContent>
                {this.props.searchable ? (
                  <Highlight attribute="sick" hit={disease} />
                ) : (
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="primary"
                  >
                    {disease.sick}
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
            <CardContent style={{ background: "#f9f9f9" }}>
              <Typography component="p">
                <FoodList cardData={disease} />
              </Typography>
            </CardContent>
          </div>
          <CardActions>
            <ShareModal
              shareLink={`https://good-food-guide.netlify.com/disease/${
                disease.searchKey
              }`}
            />
            <Link
              as={`/disease/${disease.searchKey}`}
              href={{
                pathname: "/disease",
                query: { disease: disease.searchKey }
              }}
            >
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default DiseaseCard;
