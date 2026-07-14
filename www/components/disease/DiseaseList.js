import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const DiseaseList = ({ diseases }) => (
  <Grid size={{ lg: 3, md: 4, sm: 8, xs: 10 }}>
    <List>
      {diseases.map((disease, index) => (
        <DiseaseListItem key={index} disease={disease} />
      ))}
    </List>
  </Grid>
);

DiseaseList.propTypes = {
  diseases: PropTypes.array.isRequired
};

const DiseaseListItem = ({ disease }) => {
  const { searchKey, title } = disease;
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        href={{
          pathname: "/disease",
          query: { disease: searchKey }
        }}
      >
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

DiseaseListItem.propTypes = {
  disease: PropTypes.object.isRequired
};

export default DiseaseList;
