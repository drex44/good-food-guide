import React from "react";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { brown, green } from "@mui/material/colors";

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

// Green/brown mirrors the conventional veg/non-veg indicator colors
// (rather than the previous green/bright-orange, which read as a bit
// garish next to the site's purple theme). White text on a dark shade
// reads far better than black-on-green despite both passing WCAG AA on
// paper; green[800]+white ~5.1:1, brown[500]+white ~6.6:1.
// Food names in the data are inconsistently cased (e.g. "apples" vs
// "Apples"); normalize display without touching the underlying data.
const styles = {
  vegan: {
    background: green[800],
    color: "white",
    fontSize: 12,
    margin: 5,
    textTransform: "capitalize"
  },
  nonVegan: {
    background: brown[500],
    color: "white",
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
