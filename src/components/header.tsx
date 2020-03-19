import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <h1 className="headerLogo">
          <Link to="/">Edamam Api</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
