import React from "react";
import Left from "./components/left";
import Right from "./components/right";

const App = () => {
  return (
    <div>
      <div className="content">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default App;
