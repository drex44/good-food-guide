import React, { Component } from "react";
import Link from "next/link";
import { CardContent, Grid, Typography, Button } from "@material-ui/core";
import Breadcrumb from "../layout/Breadcrumb";
import DiseaseItem from "./DiseaseItem";

class FoodCard extends Component {
  render() {
    let data = this.props.food;
    return (
      <div>
        {/* <Breadcrumb /> */}
        <Grid container spacing={8}>
          <Grid item xs={12} align="center">
            <Typography
              variant="subtitle1"
              gutterBottom
              color="primary"
              style={{ fontSize: "30px" }}
            >
              {data}
            </Typography>
            <p
              style={{
                fontSize: "20px",
                fontWieght: "bold",
                fontFamily: "Roboto"
              }}
            >
              Diseases it can treat
            </p>
            <DiseaseItem />
            <br />
            <Link href="/">
              <Button variant="contained">Back</Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FoodCard;
