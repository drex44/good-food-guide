import React, { Component } from 'react'
import Head from 'next/head'
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

class FoodCard extends Component {
  render () {
    return (
      <div>
        <Head>
          <title>Good Food Guide</title>
        </Head>
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
                <Button size="small" color="primary">
                    Learn More
                </Button>
              </CardActions>
            </Card>
          ))
        }
      </div>
    )
  }
};

export default FoodCard
