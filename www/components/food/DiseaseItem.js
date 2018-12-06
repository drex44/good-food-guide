import React from "react";

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
    <div>
      {diseases.map(disease => (
        <Chip style={styles.disease} label={disease.title} />
      ))}
    </div>
  );
};

export default DiseaseItem;
