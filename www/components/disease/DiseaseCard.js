import React from "react";
import PropTypes from "prop-types";
import FoodList from "../food/FoodList";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import ShareModal from "../ShareModal";

const DiseaseCard = ({ disease }) => {
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
          <CardMedia
            sx={{ height: 0, paddingTop: "25%" }}
            image={disease.image}
            title={disease.name}
          />
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
            <FoodList goodFoods={disease.goodFoods} />
          </Typography>
        </CardContent>
      </Box>
      <DiseaseCardAction>
        <DiseaseCardLink>
          <ShareModal
            shareLink={`/disease?disease=${disease.searchKey}`}
          />
        </DiseaseCardLink>
        <DiseaseCardLink>
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
        </DiseaseCardLink>
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
  <CardActions>
    <Grid container align="center">
      {children}
    </Grid>
  </CardActions>
);

DiseaseCardAction.propTypes = {
  children: PropTypes.array.isRequired
};

const DiseaseCardLink = ({ children }) => (
  <Grid size={{ xs: 6 }}>{children}</Grid>
);

DiseaseCardLink.propTypes = {
  children: PropTypes.object.isRequired
};

export default DiseaseCard;
