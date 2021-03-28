import React from "react";

function SearchBar({ handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <input
        placeholder="Search For a Employee"
        // ref={(input) => (this.search = input)}
        // onChange={this.handleInputChange}
      />
      <button className="btn btn-primary">Search</button>
      {/* <button onClick={this.handleFormSubmit} className="btn btn-primary">
         Search
       </button> */}
    </form>
  );
}

export default SearchBar;
