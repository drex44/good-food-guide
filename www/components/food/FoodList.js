import React from "react";

import { Chip, Tooltip } from "@material-ui/core";
import deepOrange from "@material-ui/core/colors/deepOrange";
import green from "@material-ui/core/colors/green";

const FoodList = ({ cardData }) => {
  return (
    <div>
      {Object.keys(cardData.goodFoods).map(type =>
        cardData.goodFoods[type].map(food => (
          <FoodListItem key={food.name} type={type} food={food} />
        ))
      )}
    </div>
  );
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

export default FoodList;
