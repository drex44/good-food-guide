import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import Link from 'next/link';

const FoodCard = props => {
  return (
    <Card raised>
      <CardActionArea>
        <CardMedia image="/images/viral-fever.jpg" title="Viral fever" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Viral Fever
          </Typography>
          <Typography component="p">
            Coriander Tea, Bland Diet, Gargle With Salt Water, Eat Raw Garlic &
            Onion, "Honey, Lemon and Ginger Juice", Tulsi ( Basil) Leaves
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link href={`/foodDetails?title=ViralFever`}> 
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default FoodCard;
