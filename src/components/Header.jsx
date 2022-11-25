import React from "react";

import PropTypes from "prop-types";
import { Button } from "./Button";

//a hook that returns the current location object or path location.
import { useLocation } from "react-router-dom";

//destructuring of props
// taking the title from props / parameter

const Header = ({ title, onAdd, bool }) => {
  const location = useLocation();
  // console.log(location);

  //onClick behaviour
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* Passing props to button component */}
      {/* Only show the button if the path name is / */}
      {location.pathname === "/" && (
        <Button
          color={bool ? "Red" : "Green"}
          text={bool ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
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
