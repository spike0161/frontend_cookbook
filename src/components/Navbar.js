import React from "react";
import { withRouter, Link } from "react-router-dom";
const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/addnewrecipe">Create Recipe</Link>
            </li>
            <li className="nav-item active">
              <Link to="/recipes">All Recipes</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </nav>
    </div>
  );
};
export default withRouter(NavBar);
