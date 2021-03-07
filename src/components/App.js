import React from "react";

import "../styles/App.css";
import PrimaryDisplay from "./PrimaryDisplay";

const App = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <PrimaryDisplay />
    </div>
  );
};

export default App;
