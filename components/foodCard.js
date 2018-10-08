import Link from "next/link";
import React, { Component } from 'react'
import Data from './dataList'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'

const PostLink = (props) => (
  <Link href={`detailedFoodDetails?title=${props.title}`}>
    <Button size="small" color="primary">
        {props.title}
    </Button>
  </Link>
)

class FoodCard extends Component {
  render () {
    return (
      <div>
        {
          Data.map((data, index) => (
            <Card raised key={index} style={{ marginBottom: 15 }}>
              <CardActionArea>
                <CardMedia image={data.image} title={data.sick} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.sick}
                  </Typography>
                  <Typography component="p">
                    {data.goodFoods}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <PostLink title="Learn More" />
              </CardActions>
            </Card>
          ))
        }
      </div>
    )
  }
};

export default FoodCard
