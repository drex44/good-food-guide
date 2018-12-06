import React from "react";
import ReactDOM from "react-dom";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  RefinementList,
  CurrentRefinements,
  ClearRefinements,
  Pagination
} from "react-instantsearch-dom";
import DiseaseCard from "../disease/DiseaseCard";

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
      <CurrentRefinements />
      <ClearRefinements />
      <SearchBox />
      <RefinementList attribute="category" />
      <Hits hitComponent={Product} />
      <Pagination />
    </div>
  );
};

function Product({ hit }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <DiseaseCard disease={hit} searchable />
    </div>
  );
}

export default Search;
