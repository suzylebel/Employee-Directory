import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/navbar/navbar";
import SearchName from "./components/searchname"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Navbar />
      <br />
      <SearchName />
      {/* <h1>Filter your employees using the search below!</h1> */}
      <Title />
      <EmployeeCard />

    </div>
  );
}


export default App;
