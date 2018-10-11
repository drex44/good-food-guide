import React, { Component } from "react";
import Data from "./dataList";
import FoodListItem from './FoodListItem';

import List from '@material-ui/core/List';

const FoodList = ({cardData}) => {
	return (
		<div>
			{Object.keys(cardData.goodFoods).map((type) => (
				cardData.goodFoods[type].map((food) => (
					<FoodListItem type={type} food={food}/>
				))
			))}
		</div>
	)
}

export default FoodList;