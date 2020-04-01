import React from "react";
// import HelloBootstrap from "./components/HelloBootstrap";
import Navbar from "./Components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

function App() {
  return(
  <>
    <Navbar/>
    <Jumbotron/>
    <Card fullname="Nelson Ezeume"/>
    <Card fullname="Janet Ahonle"/>
    <Card fullname="Steve Jobs"/>
  </>
  // return <HelloBootstrap/>;
  )
}

export default App;
