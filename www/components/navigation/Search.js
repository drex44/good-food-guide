import React from "react";
import ReactDOM from "react-dom";
import { InstantSearch, Highlight } from "react-instantsearch/dom";
import { Button, InputBase } from "@material-ui/core";
import Autosuggest from "react-autosuggest";
import { connectAutoComplete } from "react-instantsearch/connectors";
import Link from "next/link";

const Search = () => (
  <InstantSearch
    appId="V70A8UKIUV"
    apiKey="156a366b7911117264aabb41fb7b45dc"
    indexName="food_data"
  >
    <Result />
  </InstantSearch>
);

const Result = () => {
  return (
    <div>
      <ConnectedSearchBox />
    </div>
  );
};

function InputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <InputBase
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        }
      }}
      {...other}
    />
  );
}

class SearchBox2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onChange = (event, { newValue }) => {
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
    return (
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

export default Search;
