import React from "react";
import "../Search/style.css";

class Search extends React.Component {
    render() {
        return (
            <>
            
            <input type="text" id="searchBox" placeholder="Search" onChange={e =>{this.props.handleSearchChange(e)}} />
            </>

        );
    }
}

export default Search;