import React from "react";

const Header = () => {
  return (
    <div
      className="header"
      onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
    >
      <h1>Home</h1>
      <button>
        <img src="./icons/star.svg" alt="star" />
      </button>
    </div>
  );
};

export default Header;
