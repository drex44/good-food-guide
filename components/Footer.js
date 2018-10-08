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

class Footer extends Component {
  render () {
    return (
      <footer style={{
        backgroundColor: '#F1F3F4',
        margin: '0 -40px 0',
        width: '100vw',
        padding: '35px 25px',
        textAlign: 'center'
      }}>
      <Typography style={{ color: 'rgb(128,134,139)' }}>
        © 2018 Good Food Guide
      </Typography>
      </footer>
    )
  }
};

export default Footer
