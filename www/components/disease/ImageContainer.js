import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const ImageContainer = ({ src, alt }) => {
  return (
    <Box sx={{ width: { xs: "100%", md: "60%", lg: "40%" } }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          maxWidth: "400px",
          maxHeight: "400px",
          height: "auto",
          display: "block",
          borderRadius: "10px"
        }}
      />
    </Box>
  );
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageContainer;
