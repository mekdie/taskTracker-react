import React from "react";

import PropTypes from "prop-types";
import { Button } from "./Button";
//destructuring of props
// taking the title from props / parameter

const Header = ({ title }) => {
  //onClick behaviour
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* Passing props to button component */}
      <Button color="green" text="Add" onClick={onClick} />
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
