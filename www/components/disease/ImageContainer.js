import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const ImageContainer = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // The image starts loading as soon as SSR markup is parsed, so a fast
  // failure can resolve before hydration attaches the onError listener.
  // Catch that race by checking the already-settled state on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setHasError(true);
    }
  }, []);

  return (
    <Box sx={{ width: { xs: "100%", md: "60%", lg: "40%" } }}>
      {hasError ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
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
          onError={() => setHasError(true)}
          sx={{
            maxWidth: "400px",
            maxHeight: "400px",
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
