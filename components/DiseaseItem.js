import React from "react";

import { Chip } from "@material-ui/core";

const styles = {
  disease: {
    background: "red",
    color: "white",
    fontSize: 12,
    margin: 5
  }
};

const DiseaseItem = () => {
  return (
    <div>
      <Chip style={styles.disease} label={"cough"} />
      <Chip style={styles.disease} label={"cold"} />
      <Chip style={styles.disease} label={"flu"} />
      <Chip style={styles.disease} label={"constipation"} />
    </div>
  );
};

export default DiseaseItem;
