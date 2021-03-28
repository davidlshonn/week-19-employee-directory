import React from "react";

function SearchBar({ handleInputChange, handleFormSubmit }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="Search For a Employee" onChange={handleInputChange} />
      <button className="btn btn-primary" role="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
