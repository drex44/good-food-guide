import { withRouter } from 'next/router';
import Data from './../components/dataList';
import Layout from "../components/Layout";

const dataSet = (data, queryId) => {
    if(data.id == queryId) {
        return(
            <div>
                <img src={data.image}></img>
                <p>{data.sick}</p>
                <p>{data.goodFoods}</p>
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