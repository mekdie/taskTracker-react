import React from "react";

import PropTypes from "prop-types";
import { Button } from "./Button";
//destructuring of props
// taking the title from props / parameter

const Header = ({ title, onAdd, bool }) => {
  //onClick behaviour
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* Passing props to button component */}
      <Button
        color={bool ? "Red" : "Green"}
        text={bool ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
