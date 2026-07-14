import React from "react";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { deepOrange, green } from "@mui/material/colors";

const FoodList = ({ goodFoods, limit }) => {
  const items = Object.keys(goodFoods).flatMap(type =>
    goodFoods[type].map(food => ({ food, type }))
  );
  const visible = limit ? items.slice(0, limit) : items;
  const remaining = items.length - visible.length;

  return (
    <div>
      {visible.map(({ food, type }) => (
        <FoodListItem key={food.name} type={type} food={food} />
      ))}
      {remaining > 0 && (
        <Chip
          label={`+${remaining} more`}
          variant="outlined"
          style={{ fontSize: 12, margin: 5 }}
        />
      )}
    </div>
  );
};

FoodList.propTypes = {
  goodFoods: PropTypes.object.isRequired,
  limit: PropTypes.number
};

// White text on these background shades fails WCAG AA contrast (~2.8:1 and
// ~3.2:1 respectively); black text keeps the same vibrant backgrounds while
// passing AA (~7.5:1 and ~6.6:1).
const styles = {
  vegan: {
    background: green[500],
    color: "black",
    fontSize: 12,
    margin: 5
  },
  nonVegan: {
    background: deepOrange[500],
    color: "black",
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
