import React from "react";

import PropTypes from "prop-types";
import { Button } from "./Button";
//destructuring of props
// taking the title from props / parameter

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* Passing props to button component */}
      <Button color="green" text="Add" />
    </header>
  );
};

// Header.defaultProps = {
//   title: 1,
// };

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
