import React, { Component } from "react";
import Table from "./Table";
import API from "../utils/API";
import SearchBar from "./SearchBar";

export default class TableArea extends Component {
  //Declare state to hold employees and filtered employees
  state = {
    employees: [],
    filteredUsers: [],
    query: "",
  };

  //handleSort function
  useSortableData = (users, config = null) => {
    const [sortedConfig, setSortConfig] = React.useState(config);

    const sortedUsers = React.useMemo(() => {
      let sortableUsers = [...users];
      if (sortConfig !== null) {
        sortableUsers.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortedConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableUsers;
    }, [users, sortConfig]);

    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortedConfig.key === key &&
        sortedConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    };
    return { users: sortedUsers, requestSort, sortConfig };
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
