import React, { useState } from "react";

const TrendElement = ({ i }) => {
  const [focus, setFocus] = useState(false);

  return (
    <a href="/">
      <li>
        <h2>Trending in Turkey</h2>
        <h1>#Trend {i}</h1>
        <p>4,656 Tweets</p>
        <button
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          <MI focus={focus} />
        </button>
      </li>
    </a>
  );
};

export default TrendElement;
const MI = ({ focus }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
  >
    <g>
      <path
        fill={focus ? "#1d9bf0" : "#71767b"}
        d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
      ></path>
    </g>
  </svg>
);
