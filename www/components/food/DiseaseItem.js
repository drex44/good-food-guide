import React from "react";
import PropTypes from "prop-types";
import { Chip } from "@material-ui/core";

const styles = {
  disease: {
    background: "purple",
    color: "white",
    fontSize: 12,
    margin: 5
  }
};

const DiseaseItem = props => {
  const { diseases } = props;
  return (
    <React.Fragment>
      {diseases.map(disease => (
        <Chip style={styles.disease} label={disease.title} />
      ))}
    </React.Fragment>
  );
};

DiseaseItem.prototype = {
  classes: PropTypes.object.isRequired,
  diseases: PropTypes.array.isRequired
};

export default DiseaseItem;
