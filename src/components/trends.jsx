import React, { useRef, useState } from "react";
import TrendElement from "./trendelement";

const Trends = () => {
  const arr = Array.from({ length: 8 }).fill("a");
  const [focus, setFocus] = useState(false);
  const inputref = useRef();
  return (
    <div className="trends">
      <div className="trends-content">
        <div
          className={`search-box ${focus ? "focus" : ""}`}
          onClick={() => inputref.current.focus()}
        >
          <SearchIcon active={focus} />
          <input
            type="text"
            ref={inputref}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder="Search Twitter"
          />
        </div>
        <ul className="trends-list">
          <h1 className="t"> Trends for you</h1>
          {arr.map((a, i) => {
            return <TrendElement i={i} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Trends;
const SearchIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <g>
      <path
        fill={active ? "#1d9bf0" : "rgb(113, 118, 123)"}
        d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
      ></path>
    </g>
  </svg>
);
