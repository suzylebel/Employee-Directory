import React, { Component } from "react";
import Title from "./components/Title";

import Navbar from "./components/navbar/navbar";
import SearchName from "./components/searchname"
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./EmployeeCard/Employee";




render() {
    return (
        <div>
        <Navbar />
        <br />
        <div>
  
        <SearchName />
        <br />
        <Employee />
        </div>
  
  
        {/* <h1>Filter your employees using the search below!</h1> */}
        <Title />
    
  
      </div>
    )
}

export default Directory;