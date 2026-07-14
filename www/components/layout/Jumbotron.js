import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Jumbotron = () => (
  <Box
    sx={{
      backgroundColor: "#f2eff6",
      backgroundImage: `url(
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23d5c7ec' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
          )`,
      height: "45vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Typography
      sx={{
        textAlign: "center",
        fontSize: { xs: "1.75em", md: "2.75em", lg: "3.75em" },
        padding: { xs: "1% 10%", md: "1% 20%" }
      }}
      gutterBottom
      variant="h2"
      component="h2"
      color="primary"
    >
      A guide to know which foods are good when you have certain disease!
    </Typography>
    <Box
      sx={{
        width: { xs: "100px", md: "120px", lg: "150px" }
      }}
    >
      <Box
        component="img"
        src="https://i.imgur.com/jFe8S1R.png"
        alt="Good Foods"
        sx={{
          maxWidth: "100%",
          height: "auto",
          display: "block"
        }}
      />
    </Box>
    <Box
      component="hr"
      sx={{
        background: "#9c27b0",
        width: "30%",
        border: "none",
        height: "2px"
      }}
    />
  </Box>
);

export default Jumbotron;
