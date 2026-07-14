import React from "react";
import PropTypes from "prop-types";
import FoodList from "../food/FoodList";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Link from "next/link";
import ShareModal from "../ShareModal";
import useImageFallback from "../../hooks/useImageFallback";

const DiseaseCard = ({ disease }) => {
  const { hasError, imgRef, onError } = useImageFallback();

  return (
    <Card
      raised
      sx={{
        marginBottom: "15px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Box>
        <CardActionArea
          component={Link}
          href={{
            pathname: "/disease",
            query: { disease: disease.searchKey }
          }}
          sx={{ width: "100%" }}
        >
          {hasError ? (
            <Box
              sx={{
                aspectRatio: "4 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "grey.100",
                color: "grey.400"
              }}
            >
              <RestaurantIcon sx={{ fontSize: 48 }} />
            </Box>
          ) : (
            <CardMedia
              component="img"
              ref={imgRef}
              sx={{ aspectRatio: "4 / 1" }}
              image={disease.image}
              alt={disease.name}
              title={disease.name}
              loading="lazy"
              decoding="async"
              onError={onError}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" color="primary">
              {disease.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardContent sx={{ background: "rgb(241, 241, 241)", minHeight: "300px" }}>
          <Typography variant="subtitle1" align="justify">
            {shortenText(disease.description, 0, 200) + " . . ."}
          </Typography>
          <Typography component="div" style={{ margin: "10px 0px" }}>
            <Box sx={{ maxHeight: "84px", overflow: "hidden" }}>
              <FoodList goodFoods={disease.goodFoods} />
            </Box>
          </Typography>
        </CardContent>
      </Box>
      <DiseaseCardAction>
        <ShareModal shareLink={`/disease?disease=${disease.searchKey}`} />
        <Button
          component={Link}
          href={{
            pathname: "/disease",
            query: { disease: disease.searchKey }
          }}
          color="primary"
        >
          Learn More
        </Button>
      </DiseaseCardAction>
    </Card>
  );
};

DiseaseCard.propTypes = {
  disease: PropTypes.object.isRequired
};

const shortenText = (text, startingPoint, maxLength) => {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
};

const DiseaseCardAction = ({ children }) => (
  <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
    {children}
  </CardActions>
);

DiseaseCardAction.propTypes = {
  children: PropTypes.array.isRequired
};

export default DiseaseCard;
