import React, { Component } from "react";
import Link from "next/link";
import { CardContent, Grid, Typography, Button } from "@material-ui/core";
import DiseaseItem from "./DiseaseItem";

class FoodCard extends Component {
  render() {
    let data = this.props.food ? this.props.food : "Banana";
    let diseases = [
      { title: "cough", searchKey: "cough" },
      { title: "viral fever", searchKey: "viral-fever" }
    ];
    return (
      <div>
        {/* <Breadcrumb /> */}
        <Grid container spacing={8}>
          <Grid item xs={12} align="center">
            <Typography
              variant="subtitle1"
              color="primary"
              style={{ fontSize: "30px" }}
            >
              {data}
            </Typography>
            <Typography
              style={{
                fontSize: "20px"
              }}
            >
              It can treat below diseases,
            </Typography>
            <DiseaseItem diseases={diseases} />
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
