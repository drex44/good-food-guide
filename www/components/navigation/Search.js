import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Autosuggest from "react-autosuggest";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SickIcon from "@mui/icons-material/Sick";
import Link from "next/link";
import Router from "next/router";
import diseases from "../../data/diseases.json";

const foodsOf = disease => [
  ...disease.goodFoods.vegan,
  ...disease.goodFoods.nonVegan
];

const matchesDisease = (disease, query) => {
  if (disease.name.toLowerCase().includes(query)) return true;
  const matchesSymptom = disease.symptoms.some(group =>
    group.symptoms.some(symptom => symptom.toLowerCase().includes(query))
  );
  if (matchesSymptom) return true;
  return foodsOf(disease).some(food => food.name.toLowerCase().includes(query));
};

const getSuggestions = value => {
  const query = value.trim().toLowerCase();
  if (query.length === 0) return [];

  const validDiseases = diseases.filter(disease => disease.valid);

  const matchedDiseases = validDiseases
    .filter(disease => matchesDisease(disease, query))
    .map(disease => ({ kind: "disease", ...disease }));

  const foodNames = new Set();
  validDiseases.forEach(disease =>
    foodsOf(disease).forEach(food => {
      if (food.name.toLowerCase().includes(query)) {
        foodNames.add(food.name);
      }
    })
  );
  const matchedFoods = [...foodNames]
    .sort((a, b) => a.localeCompare(b))
    .map(name => ({ kind: "food", name }));

  return [...matchedDiseases, ...matchedFoods];
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", suggestions: [] };
  }

  onChange = (_, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ suggestions: getSuggestions(value) });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    if (suggestion.kind === "food") {
      Router.push({ pathname: "/foodDetails", query: { food: suggestion.name } });
    } else {
      Router.push({ pathname: "/disease", query: { disease: suggestion.searchKey } });
    }
  };

  getSuggestionValue(hit) {
    return hit.name;
  }

  renderSuggestion(hit) {
    return <RenderHit hit={hit} />;
  }

  render() {
    const { value, suggestions } = this.state;
    const showNoResults = value.trim().length > 0 && suggestions.length === 0;

    const inputProps = {
      placeholder: "Search disease or food...",
      onChange: this.onChange,
      value
    };

    return (
      <div style={{ position: "relative", width: "100%" }}>
        <Autosuggest
          renderInputComponent={InputComponent}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
        {showNoResults && (
          <Paper
            square
            sx={{
              position: "absolute",
              top: "51px",
              left: 0,
              width: "100%",
              zIndex: 2,
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px"
            }}
          >
            <Typography sx={{ padding: "10px 20px", color: "text.secondary" }}>
              No matches found
            </Typography>
          </Paper>
        )}
      </div>
    );
  }
}

const RenderHit = ({ hit }) =>
  hit.kind === "food" ? (
    <Button
      component={Link}
      href={{
        pathname: "/foodDetails",
        query: { food: hit.name }
      }}
      startIcon={<RestaurantIcon fontSize="small" />}
    >
      {hit.name}
    </Button>
  ) : (
    <Button
      component={Link}
      href={{
        pathname: "/disease",
        query: { disease: hit.searchKey }
      }}
      startIcon={<SickIcon fontSize="small" />}
    >
      {hit.name}
    </Button>
  );

RenderHit.propTypes = {
  hit: PropTypes.object.isRequired
};

const InputComponent = inputProps => {
  const { classes, inputRef = () => {}, ref, key, ...other } = inputProps;
  return (
    <InputBase
      style={{ color: "white" }}
      // The browser's default placeholder opacity (~0.5) drops contrast
      // against this translucent background to ~2:1; match the ~4.8:1
      // the typed (full-opacity white) text gets.
      sx={{ "& input::placeholder": { opacity: 1 } }}
      fullWidth
      {...other}
    />
  );
};

export default Search;
