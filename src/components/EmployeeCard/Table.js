import React from "react";
import Tbody from "./Tbody";


function Table(props) {
  
    //initialize sortedResults variable
    const sortedResults = props.results;
    //This returns the property of an object
    const simplePropertyRetriever = function(obj) {
        return obj.name.first;
    };
   

    const sortTrue = function (propertyRetriever, arr) {
        arr.sort(function (a, b) {
            const valueA = propertyRetriever(a);
            const valueB = propertyRetriever(b);
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        });
    };
  

    const sortFalse = function (propertyRetriever, arr) {
        arr.sort(function (a, b) {
            const valueA = propertyRetriever(a);
            const valueB = propertyRetriever(b);
            if (valueB < valueA) {
                return -1;
            } else if (valueB > valueA) {
                return 1;
            } else {
                return 0;
            }
        });
    };

    if(props.sort === true){
        sortTrue(simplePropertyRetriever, sortedResults);
    } else {
        sortFalse(simplePropertyRetriever, sortedResults);
    }
    //This returns a Table component
    return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
           
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Location</th>
            </tr>
        </thead>
        <Tbody 
        results={sortedResults} key={sortedResults.email}
        />
        </table>
    );
}

export default Table;