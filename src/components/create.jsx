import React, { useState } from "react";

const Create = () => {
  const [state, setState] = useState("");

  return (
    <div className="create">
      <div className="box">
        <img src="./pp.jpg" alt="pp" className="pp" />
        <input
          type="text"
          placeholder="What`s happening?"
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
      </div>
      <div className="lll"></div>
      <div className="buttons">
        <ul>
          <li>
            <button>
              <img src="./icons/createimg.svg" alt="create-img" />
            </button>
          </li>
          <li>
            <button>
              <img src="./icons/creategif.svg" alt="create-img" />
            </button>
          </li>
          <li>
            <button>
              <img src="./icons/createtodo.svg" alt="create-img" />
            </button>
          </li>
          <li>
            <button>
              <img src="./icons/createemoji.svg" alt="create-img" />
            </button>
          </li>
          <li>
            <button>
              <img src="./icons/createcalendar.svg" alt="create-img" />
            </button>
          </li>
          <li>
            <button>
              <img src="./icons/createlocation.svg" alt="create-img" />
            </button>
          </li>
        </ul>
        <button disabled={state.length < 1} className="tb">
          <span>Tweet</span>
        </button>
      </div>
    </div>
  );
};

export default Create;
