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
  handleSort = () => {};

  //Function being called which returns the comployees from the API within a componentDidMount
  componentDidMount() {
    API.getEmps().then((response) => {
      this.setState({
        employees: response.data.result,
        filteredUsers: response.data.results,
      });
    });
  }

  //handleSearch function
  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getEmps();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  handleFormSubmit = () => {};
  //render two other components:
  //SearchBar - takes a handleSearch function
  //Table - takes the employees and a function called handleSort
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
