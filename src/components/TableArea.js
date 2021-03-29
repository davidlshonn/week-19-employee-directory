import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "./SearchBar";
import TableBody from "./TableBody";

export default class TableArea extends Component {
  //Declare state to hold employees and filtered employees
  state = {
    employees: [],
    filteredUsers: [],
    currentSort: "descend",
    query: "",
    initialEmployees: [],
  };

  //handleSort function
  //   onSortChange = (tableColumn) => {
  //     const { currentSort } = this.state;
  //     let nextSort;

  //     if (currentSort === "default") nextSort = "descending";
  //     else if (currentSort === "descending") nextSort = "ascending";
  //     else if (currentSort === "ascending") nextSort = "default";

  //     this.setState({
  //       currentSort: nextSort,
  //     });

  //     if (nextSort === "default") {
  //       this.setState({ employees: this.state.initialEmployees });
  //     }

  //     const userComparison = (a, b) => {
  //       if (currentSort === "default") {
  //         return a[tableColumn].first.localeCompare(b[tableColumn].first);
  //       } else if (currentSort === "descending") {
  //         return b[tableColumn].first.localeCompare(a[tableColumn].first);
  //       } else if (currentSort === "ascending") {
  //         return a[tableColumn].first.localeCompare(b[tableColumn].first);
  //       }
  //     };
  //     const sortedUsers = this.state.employees.sort(userComparison);
  //     this.setState({ initialEmployees: sortedUsers });
  //   };

  onSortChange = (tableColumn) => {
    console.log(tableColumn);
    if (this.state.order === "default") {
      this.setState({
        order: "ascend",
      });
    } else {
      this.setState({
        order: "default",
      });
    }
    const userComparison = (a, b) => {
      if (this.state.order === "ascend") {
        return a[tableColumn].first.localeCompare(b[tableColumn].first);
      } else {
        return b[tableColumn].first.localeCompare(a[tableColumn].first);
      }
    };
    const sortedUsers = this.state.filteredUsers.sort(userComparison);
    this.setState({ initialEmployees: sortedUsers });
  };

  //Function being called which returns the comployees from the API within a componentDidMount
  componentDidMount() {
    API.getEmps().then((response) => {
      this.setState({
        employees: response.data.results,
        filteredUsers: response.data.results,
        initialEmployees: response.data.results,
      });
    });
  }

  //handleSearch function
  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const filteredUsersList = this.state.employees.filter(
      ({ name: { first, last }, email }) => {
        if (first.toLowerCase().includes(this.state.query.toLowerCase())) {
          return true;
        } else if (
          last.toLowerCase().includes(this.state.query.toLowerCase())
        ) {
          return true;
        } else if (
          email.toLowerCase().includes(this.state.query.toLowerCase())
        ) {
          return true;
        }

        return false;
      }
    );
    this.setState({ filteredUsers: filteredUsersList });
  };

  render() {
    return (
      <div>
        <br />
        <SearchBar
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <br />
        <br />
        <table style={{}}>
          <thead>
            <tr>
              <th onClick={() => this.onSortChange("name")}>
                <button className="btn" style={{ backgroundColor: "#eee" }}>
                  Name
                </button>
              </th>
              <th>
                <button className="btn" style={{ backgroundColor: "#eee" }}>
                  Location
                </button>
              </th>
              <th>
                {" "}
                <button className="btn" style={{ backgroundColor: "#eee" }}>
                  Email Address
                </button>
              </th>
              <th>
                {" "}
                <button className="btn" style={{ backgroundColor: "#eee" }}>
                  Phone No.
                </button>
              </th>
            </tr>
          </thead>
          <TableBody employees={this.state.employees} />
        </table>
      </div>
    );
  }
}
