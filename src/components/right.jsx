import React, { useRef, useState } from "react";
import Feed from "./feed";
import Trends from "./trends";

const Right = () => {
  return (
    <div className="right">
      <Feed />
      <Trends />
    </div>
  );
};

export default Right;
