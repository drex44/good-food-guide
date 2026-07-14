import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import useImageFallback from "../../hooks/useImageFallback";

const ImageContainer = ({ src, alt }) => {
  const { hasError, imgRef, onError } = useImageFallback();

  return (
    <Box sx={{ width: "100%" }}>
      {hasError ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "400px", md: "460px" },
            height: "260px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            boxShadow: 3,
            bgcolor: "grey.100",
            color: "grey.400"
          }}
        >
          <RestaurantIcon sx={{ fontSize: 72 }} />
        </Box>
      ) : (
        <Box
          component="img"
          ref={imgRef}
          src={src}
          alt={alt}
          decoding="async"
          onError={onError}
          sx={{
            maxWidth: { xs: "400px", md: "460px" },
            maxHeight: { xs: "400px", md: "460px" },
            width: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "10px",
            boxShadow: 3
          }}
        />
      )}
    </Box>
  );
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageContainer;
