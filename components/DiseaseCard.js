import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";
import DiseaseItem from "./DiseaseItem";

class DiseaseCard extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        {this.props.foodData.map((food, index) => (
          <Grid item xs={4} md={6} lg={3} style={{ display: "flex" }}>
            <Card
              raised
              key={index}
              style={{ marginBottom: 15, width: "100%" }}
            >
              <CardActionArea style={{ width: "100%" }}>
                <CardMedia
                  style={{ height: 0, paddingTop: "25%" }}
                  image={food.image}
                  title={food.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="primary"
                  >
                    {food.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardContent style={{ background: "#f9f9f9" }}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWieght: "bold",
                    fontFamily: "Roboto"
                  }}
                >
                  Diseases it can treat:
                </p>
                <DiseaseItem />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default DiseaseCard;
