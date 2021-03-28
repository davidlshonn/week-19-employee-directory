import React from "react";
import TableBody from "./TableBody";

function Table({ employees, handleSort }) {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>
            <button className="btn">Name</button>
          </th>
          <th>
            <button className="btn">Location</button>
          </th>
          <th>
            {" "}
            <button className="btn">Email Address</button>
          </th>
          <th>
            {" "}
            <button className="btn">Phone No.</button>
          </th>
        </tr>
      </thead>
      <TableBody employees={employees} />
    </table>
  );
}

export default Table;
