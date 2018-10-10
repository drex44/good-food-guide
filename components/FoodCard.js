import React, { Component } from "react";
import Data from "./dataList";
import FoodList from "./FoodList";
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

class FoodCard extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        {Data.map((data, index) => (
          <Grid item xs={12} lg={6}>
            <Card
              raised
              key={index}
              style={{ marginBottom: 15, width: "100%" }}
            >
              <CardActionArea style={{ width: "100%" }}>
                <CardMedia
                  style={{ height: 0, paddingTop: "25%" }}
                  image={data.image}
                  title={data.sick}
                />
                <CardContent style={{paddingBottom: 0}}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="primary"
                  >
                    {data.sick}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardContent style={{background: "#f9f9f9"}}>
              <Typography component="p">
                    {" "}
                <FoodList cardData={data} />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Link
                  href={{
                    pathname: "/foodDetails",
                    query: { title: data.sick, id: data.id }
                  }}
                >
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default FoodCard;
