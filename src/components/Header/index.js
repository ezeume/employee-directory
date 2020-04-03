import React from "react";
import "../Header/style.css";

function Header() {
    return (
        <header className="header">  
            <h1 className="title">Employee Directory</h1>
            <p className="desc">Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </header>
    );
}

export default Header;