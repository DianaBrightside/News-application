import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/style.css";
import Search from "./Search";

const Header = () => {
  let submenuItems = [
    "Sport",
    "World",
    "Covid",
    "Business",
    "Politics",
    "Science",
    "Religion",
    "Health",
  ];

  const firstHalf = [];
  const secondHalf = [];

  // BURGER
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  let arrayToAdd;
  for (let i = 0; i < submenuItems.length; i++) {
    if (i % 2 === 0) {
      arrayToAdd = firstHalf;
    } else {
      arrayToAdd = secondHalf;
    }
    arrayToAdd.push(
      <li key={"headerItem" + i} className="submenu__item">
        <Link to={"/" + submenuItems[i].toLowerCase()}>{submenuItems[i]}</Link>
      </li>
    );
  }

  return (
    <header>
      <div className="wrapper">
        <div className="logo__search">
          <span className="logo">
            <Link to="/">News App</Link>
          </span>
          <Search />
        </div>
        <nav>
          <div className={isActive ? "menu" : "menu _active"}>
            <span className="menu__item categories">
              <Link to="/">Categories</Link>
              <div className="submenu">
                <ul className="column">{firstHalf}</ul>
                <ul className="column">{secondHalf}</ul>
              </div>
            </span>
            <Link to="/trending" className="menu__item">
              &#9889; Trending news
            </Link>
          </div>
          <div
            onClick={ToggleClass}
            className={isActive ? "menu__icon" : "menu__icon _active"}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
