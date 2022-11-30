import React from "react";
import LeftBottom from "./leftbottom";
import LeftUp from "./leftup";

const Left = () => {
  return (
    <div className="left">
      <div className="left-content">
        <LeftUp />
        <LeftBottom />
      </div>
    </div>
  );
};

export default Left;
