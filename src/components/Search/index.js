import React from "react";
import "../Search/style.css";


function Search(props) {
  return (
    <input type="text" 
    id="searchBox" 
    placeholder="Search" 
    value={props.search} 
    name="search"
    onChange={props.handleSearchChange} ></input>
  );
}


export default Search;
