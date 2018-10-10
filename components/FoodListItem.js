import React, { Component } from "react";

import {
	Chip,
	ListItem,
	Tooltip
} from '@material-ui/core';
import lightGreen from '@material-ui/core/colors/lightGreen';
import brown from '@material-ui/core/colors/brown';

const styles = {
	vegan: {
		background: lightGreen[600],
		color: 'white',
		fontSize: 17,
		margin: 5
	},
	nonVegan: {
		background: brown[400],
		color: 'white',
		fontSize: 17,
		margin: 5
	}
};

const FoodListItem = ({food, type}) => (
	<Tooltip title={`${food.desc} (${type})`} tooltip={{tooltip: {background: 'red'}}}>
		<Chip style={styles[type]} label={food.name} />
	</Tooltip>
);

export default FoodListItem;