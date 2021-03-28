import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    // trigger rebuild
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
