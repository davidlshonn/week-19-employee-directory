import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <nav style={{ backgroundColor: "#eee", paddingBottom: "10px" }}>
        <h2
          style={{
            paddingTop: "10px",
            textAlign: "center",
            color: "black",
          }}
        >
          Employee Directory
        </h2>
      </nav>
    );
  }
}
