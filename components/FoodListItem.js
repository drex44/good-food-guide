import React, { Component } from "react";

import {
	Chip,
	ListItem,
	Tooltip
} from '@material-ui/core';
import deepOrange from '@material-ui/core/colors/deepOrange';
import green from '@material-ui/core/colors/green';

const styles = {
	vegan: {
		background: green[500],
		color: 'white',
		fontSize: 17,
		margin: 5
	},
	nonVegan: {
		background: deepOrange[500],
		color: 'white',
		fontSize: 17,
		margin: 5
	}
};

const FoodListItem = ({food, type}) => (
	<Tooltip title={`${food.desc} (${type})`}>
		<Chip style={styles[type]} label={food.name} />
	</Tooltip>
);

export default FoodListItem;