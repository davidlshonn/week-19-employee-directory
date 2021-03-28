import React from "react";

function TableBody({ employees }) {
  console.log("employees: ", employees);
  return (
    <tbody>
      {employees.map(
        ({
          name: { first, last },
          phone,
          id: { value },
          location: { city, country },
          email,
        }) => {
          return (
            <tr key={value || `${first}-${last}`}>
              <td>
                {first} {last}
              </td>
              <td>
                {city}, {country}
              </td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
          );
        }
      )}
    </tbody>
  );
}

export default TableBody;
