import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Photo</th>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email
      </th>
      <th scope="col">DOB
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Suzy</td>
      <td>Lebel</td>
      <td>suzy.lebel@gmail.com</td>
      <td>06/28/1996</td>
    </tr>
    
  </tbody>
</table>
</div>
  );
}

export default EmployeeCard;
