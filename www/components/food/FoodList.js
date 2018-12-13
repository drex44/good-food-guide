import React from "react";
import PropTypes from "prop-types";
import { Chip, Tooltip } from "@material-ui/core";
import deepOrange from "@material-ui/core/colors/deepOrange";
import green from "@material-ui/core/colors/green";

const FoodList = ({ goodFoods }) => {
  return (
    <div>
      {Object.keys(goodFoods).map(type =>
        goodFoods[type].map(food => (
          <FoodListItem key={food.name} type={type} food={food} />
        ))
      )}
    </div>
  );
};

FoodList.prototype = {
  goodFoods: PropTypes.array
};

const styles = {
  vegan: {
    background: green[500],
    color: "white",
    fontSize: 12,
    margin: 5
  },
  nonVegan: {
    background: deepOrange[500],
    color: "white",
    fontSize: 12,
    margin: 5
  }
};

const FoodListItem = ({ food, type }) => (
  <Tooltip title={`${food.desc} (${type})`}>
    <Chip style={styles[type]} label={food.name} />
  </Tooltip>
);

FoodListItem.prototype = {
  classes: PropTypes.object.isRequired,
  food: PropTypes.object,
  type: PropTypes.string
};

export default FoodList;
