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
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>${user.location}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
