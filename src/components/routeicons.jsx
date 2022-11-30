import React from "react";

const rotues = [
  "Home",
  "Explore",
  "Notifications",
  "Messages",
  "Bookmarks",
  "Lists",
  "Profile",
  "More",
];

const RouteIcons = () => {
  return (
    <ul>
      {rotues.map((text) => (
        <RouteIcon text={text} />
      ))}{" "}
      <button className="tw-btn">
        <img src="./icons/tweet.svg" alt="tweet" />
        <p>Tweet</p>
      </button>
    </ul>
  );
};

export default RouteIcons;

const RouteIcon = ({ text }) => (
  <li className={text === "Home" && "active"}>
    <a href="/">
      <img src={`/icons/${text.toLowerCase()}.svg`} alt={text} />
      <p>{text}</p>
    </a>
  </li>
);
