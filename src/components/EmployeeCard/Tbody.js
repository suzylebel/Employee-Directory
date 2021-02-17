import React from "react";

//This maps through the random users and creates a new table row for each user
function Tbody(props) {
    //initialize the tableData variable that will be returned to Table
    
    const tableData = props.results.map((employee) => 
    <tr key={employee.email}>

    <td><img className="img-fluid img-thumbnail" src={employee.picture.medium} alt={employee.name.first} /></td>
    <td>{employee.name.first + " " + employee.name.last}</td>
    <td>{employee.email}</td>
    <td>{employee.phone}</td>
    <td>{employee.location.country}</td>
    </tr>
    )
    return (
        <tbody>
            {tableData}
        </tbody>
    );
}

export default Tbody;