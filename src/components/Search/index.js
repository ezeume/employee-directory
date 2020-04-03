import React from "react";
import "../Search/style.css";

class Search extends React.Component {
    render() {
        return (
            <>
            
            <input className="txtInput" type="text" id="searchBox" placeholder="Search" />
            </>

        );
    }
}

export default Search;