import React from "react";
import Table from "./Table";
import API from "../utils/API";

export default class TableArea extends React.Component {
  state = {
    employees: [],
    filteredUsers: [],
  };

  componentDidMount() {
    API.getEmps().then((response) => {
      this.setState({
        employees: response.data.result,
        filteredUsers: response.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <h4>This is where the table etc will be</h4>
        <Table employees={this.state.filteredUsers} />
      </>
    );
  }
}
