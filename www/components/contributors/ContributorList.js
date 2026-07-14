import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const Contributors = ({ contributors }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden"
    }}
  >
    {contributors.map((item, index) => {
      return <StyledContributor key={index} contributor={item} />;
    })}
  </Box>
);

Contributors.propTypes = {
  contributors: PropTypes.array.isRequired
};

const StyledContributor = props => {
  const { contributor } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px",
        transition: "0.5s",
        "&:hover": {
          transform: "scale(1.2)"
        }
      }}
    >
      <a href={contributor.html_url} target="_blank" rel="noreferrer">
        <center>
          <Avatar
            alt={contributor.login}
            src={contributor.avatar_url}
            sx={{ margin: "10px", width: 60, height: 60 }}
          />
        </center>
      </a>
      <Typography style={{ textAlign: "center" }}>
        {contributor.login}
      </Typography>
    </Box>
  );
};

StyledContributor.propTypes = {
  contributor: PropTypes.object.isRequired
};

export default Contributors;
