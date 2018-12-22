import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";

const DiseaseList = props => {
  const { diseases } = props;
  return (
    <Grid item lg={3} md={4} sm={8} xs={10}>
      <List>
        {diseases.map((disease, index) => (
          <DiseaseListItem key={index} disease={disease} />
        ))}
      </List>
    </Grid>
  );
};

DiseaseList.propTypes = {
  diseases: PropTypes.array.isRequired
};

const DiseaseListItem = props => {
  const { disease } = props;
  return (
    <ListItem button>
      <Link
        href={{
          pathname: "/disease",
          query: { disease: disease.searchKey }
        }}
      >
        <ListItemText primary={disease.title} />
      </Link>
    </ListItem>
  );
};

DiseaseListItem.propTypes = {
  disease: PropTypes.object.isRequired
};

export default DiseaseList;
