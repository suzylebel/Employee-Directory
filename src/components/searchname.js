import React from "react";


function SearchName(props) {
  return (
      <div className="container">
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
        placeholder="Employee Name"
        aria-label="Search"
    
      />
      </div>
  </div>
  </div>
  );
}

export default SearchName;
