import React, { Component } from "react";
import Data from "./dataList";
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
            <Card raised key={index} style={{ marginBottom: 15, width: '100%' }}>
              <CardActionArea style={{ width: '100%' }}>
                <CardMedia style={{height: 0, paddingTop: '25%'}} image={data.image} title={data.sick} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" color="primary">
                    {data.sick}
                  </Typography>
                  <Typography component="p">{data.goodFoods}</Typography>
                </CardContent>
              </CardActionArea>
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
