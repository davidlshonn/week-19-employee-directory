import React, { Component } from "react";
import Table from "./Table";
import API from "../utils/API";
import SearchBar from "./SearchBar";

export default class TableArea extends Component {
  //Declare state to hold employees and filtered employees
  state = {
    employees: [],
    filteredUsers: [],
    currentSort: "default",
    query: "",
  };

  //handleSort function
  onSortChange = (tableColumn) => {
    const { currentSort } = this.state;
    let nextSort;

    if (currentSort === "descending") nextSort = "ascending";
    else if (currentSort === "ascending") nextSort = "default";
    else if (currentSort === "default") nextSort = "descending";

    this.setState({
      currentSort: nextSort,
    });
    const userComparison = (a, b) => {
      if (currentSort === "ascending") {
        return a[tableColumn].first.localeCompare(b[tableColumn].first);
      } else {
        return b[tableColumn].first.localeCompare(a[tableColumn].first);
      }
    };
    const sortedUsers = currentSort.sort(userComparison);
    this.setState({ currentSort: sortedUsers });
  };

  //Function being called which returns the comployees from the API within a componentDidMount
  componentDidMount() {
    API.getEmps().then((response) => {
      this.setState({
        employees: response.data.results,
        filteredUsers: response.data.results,
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
      <>
        <SearchBar
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <h4>This is where the table etc will be</h4>
        <Table employees={this.state.filteredUsers} />
      </>
    );
  }
}
