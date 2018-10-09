import { withRouter } from 'next/router';
import Data from './../components/dataList';
import Layout from "../components/Layout";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      maxWidth: 500,
    },
  });

const dataSet = (data, queryId) => {
    if(data.id == queryId) {
        return(
            <Grid container spacing={8}>
                <Grid item xs={12}  direction="column" align="center">
                    <img src={data.image}></img>
                    <Typography variant="subtitle1" gutterBottom>
                        {data.sick}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {data.goodFoods}
                    </Typography>
                </Grid>
            </Grid>
        )
    }    
}

const FoodDetails = withRouter((props) => (
    <Layout>
        <Typography component="h2" variant="h3" gutterBottom color="primary" align="center">
            {props.router.query.title}
        </Typography>        
        { 
            Data.map((data, index) => (
                dataSet(data, props.router.query.id)
            ))
        }
    </Layout>
));

export default FoodDetails;