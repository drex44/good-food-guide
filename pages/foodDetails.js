import { withRouter } from 'next/router';
import Data from './../components/dataList';
import Layout from "../components/Layout";

const dataSet = (data, queryId) => {
    if(data.id == queryId) {
        return(
            <div>
                <p>{data.image}</p>
                <p>{data.sick}</p>
                <p>{Object.keys(data.goodFoods).map((key) => {
                  return data.goodFoods[key].map((food) => (`${food.name}, `));
                })}</p>
            </div>
        )
    }    
}

const FoodDetails = withRouter((props) => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        { 
            Data.map((data, index) => (
                dataSet(data, props.router.query.id)
            ))
        }
    </Layout>
));

export default FoodDetails;