import React from "react";
import Table from "./Table";
import API from "../utils/API";

export default class TableArea extends React.Component {
  //Declare state to hold employyes and filtered employees
  state = {
    employees: [],
    filteredUsers: [],
  };

  //handleSearch function

  //handleSort function

  //Function being called which returns the comployees from the API within a componentDidMount
  componentDidMount() {
    API.getEmps().then((response) => {
      this.setState({
        employees: response.data.result,
        filteredUsers: response.data.results,
      });
    });
  }
  //render two other components:
  //SearchBar - takes a handleSearch function
  //Table - takes the employees and a function called handleSort
  render() {
    return (
      <>
        <h4>This is where the table etc will be</h4>
        <Table employees={this.state.filteredUsers} />
      </>
    );
  }
}

//import React from 'react';
// import Table from "./Table"
// import API from '../utils/API'
// export default class TableArea extends React.Component {
//     state = {
//             employees: [{}],
//             filteredEmployees: [{}]
//     }
//     componentDidMount(){
//         API.getEmployees().then(response => {
//             console.log(response)
//             this.setState({
//                 employees: response.data.results,
//                 filteredEmployees: response.data.results,
//             })
//         })
//     }
//         render(){
//             return (
//                 <>
//                 <h4>This is where the table etc will be</h4>
//                 <Table employees={this.state.filteredEmployees}/>
//                 </>
//             )
//         }
// }
