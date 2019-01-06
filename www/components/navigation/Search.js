import React from "react";
import PropTypes from "prop-types";
import { InstantSearch, Highlight } from "react-instantsearch/dom";
import { Button, InputBase } from "@material-ui/core";
import Autosuggest from "react-autosuggest";
import { connectAutoComplete } from "react-instantsearch/connectors";
import Link from "next/link";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const Search = () => (
  <InstantSearch
    appId={publicRuntimeConfig.SearchAppId}
    apiKey={publicRuntimeConfig.SearchApiKey}
    indexName={publicRuntimeConfig.SearchIndexName}
  >
    <ConnectedSearchBox />
  </InstantSearch>
);

class SearchBox2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onChange = (_, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.refine();
  };

  getSuggestionValue(hit) {
    return hit.name;
  }

  renderSuggestion(hit) {
    return <RenderHit hit={hit} />;
  }

  render() {
    const { hits } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: "Search disease or food...",
      onChange: this.onChange,
      value
    };

    return (
      <Autosuggest
        renderInputComponent={InputComponent}
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

const ConnectedSearchBox = connectAutoComplete(SearchBox2);

const RenderHit = ({ hit }) => (
  <Link
    href={{
      pathname: "/disease",
      query: { disease: hit.searchKey }
    }}
  >
    <Button>
      <Highlight attribute="name" hit={hit} tagName="mark" />
    </Button>
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
