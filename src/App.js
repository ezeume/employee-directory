import React from "react";
import Header from "./components/Header/";
import Search from "./components/Search/";
import EmployeeTable from "./components/EmployeeTable/";


function App() {
  function userSearch(e){
    console.log(e)
  }
  return (
    
    <>
      <Header />
      <Search handleSearchChange={userSearch}/>
      <br /><br />
      <EmployeeTable />

    </>
  );
}

export default App;
