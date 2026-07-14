import React from "react";
import PropTypes from "prop-types";
import { Button, InputBase } from "@material-ui/core";
import Autosuggest from "react-autosuggest";
import Link from "next/link";
import diseases from "../dataList";

const getSuggestions = value => {
  const query = value.trim().toLowerCase();
  if (query.length === 0) return [];
  return diseases.filter(disease => disease.sick.toLowerCase().includes(query));
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

  getSuggestionValue(hit) {
    return hit.sick;
  }

  renderSuggestion(hit) {
    return <RenderHit hit={hit} />;
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Search disease or food...",
      onChange: this.onChange,
      value
    };

    return (
      <Autosuggest
        renderInputComponent={InputComponent}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

const RenderHit = ({ hit }) => (
  <Link
    href={{
      pathname: "/disease",
      query: { disease: hit.searchKey }
    }}
  >
    <Button>{hit.sick}</Button>
  </Link>
);

RenderHit.propTypes = {
  hit: PropTypes.object.isRequired
};

const InputComponent = inputProps => {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;
  return <InputBase style={{ color: "white" }} fullWidth {...other} />;
};

export default Search;
