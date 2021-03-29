import React from "react";
import "./styles.css";

function SearchBar({ handleInputChange, handleFormSubmit }) {
  return (
    <div
      style={{
        padding: "10px 20px",
        paddingLeft: "100px",
        paddingRight: "100px",
        textAlign: "center",
        color: "black",
      }}
    >
      <form onSubmit={handleFormSubmit} style={{ color: "white" }}>
        <input
          placeholder="Search For a Employee"
          onChange={handleInputChange}
          className="form-control"
          style={{}}
        />
        <br />
        <button
          className="btn"
          role="text"
          style={{ backgroundColor: "#eee", width: "250px" }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
