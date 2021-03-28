import React from "react";
import TableBody from "./TableBody";
function Table({ employees }) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("location")}
              className={getClassNamesFor("location")}
            >
              Location
            </button>
          </th>
          <th>Email Address</th>
          <th>Phone No.</th>
        </tr>
      </thead>
      <TableBody employees={employees} />
    </table>
  );
}
export default Table;
