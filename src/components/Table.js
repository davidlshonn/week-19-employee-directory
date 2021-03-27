import React from "react";
import TableBody from "./TableBody";
function Table({ employees }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Email Address</th>
          <th>Phone No.</th>
        </tr>
      </thead>
      <TableBody employees={employees} />
    </table>
  );
}
export default Table;
