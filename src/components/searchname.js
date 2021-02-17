import React from "react";


function SearchName(props) {
  return (
      <div className="container">
 <div className="jumbotron ">
  <div className="container ">
    <h3 className="text-center">Search for an employee by name below or sort by first and last name!</h3>
  </div>
  <br />
</div> 

    <div className="searchbox">
    <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Search
          </span>
        </div>
        <input
        className="form-control mr-sm-2"
        type="search"
        value={props.value}
        placeholder="Search Employee Name Here"
        aria-label="Search"
    
      />
      </div>
  </div>
  </div>
  );
}

export default SearchName;
