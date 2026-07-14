import React from "react";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { deepOrange, green } from "@mui/material/colors";

const FoodList = ({ goodFoods }) => {
  const items = Object.keys(goodFoods).flatMap(type =>
    goodFoods[type].map(food => ({ food, type }))
  );

  return (
    <div>
      {items.map(({ food, type }) => (
        <FoodListItem key={food.name} type={type} food={food} />
      ))}
    </div>
  );
};

FoodList.propTypes = {
  goodFoods: PropTypes.object.isRequired
};

// White text on these background shades fails WCAG AA contrast (~2.8:1 and
// ~3.2:1 respectively); black text keeps the same vibrant backgrounds while
// passing AA (~7.5:1 and ~6.6:1).
// Food names in the data are inconsistently cased (e.g. "apples" vs
// "Apples"); normalize display without touching the underlying data.
const styles = {
  vegan: {
    background: green[500],
    color: "black",
    fontSize: 12,
    margin: 5,
    textTransform: "capitalize"
  },
  nonVegan: {
    background: deepOrange[500],
    color: "black",
    fontSize: 12,
    margin: 5,
    textTransform: "capitalize"
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
