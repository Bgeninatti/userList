import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <h5 className="navbar-brand">Users</h5>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => this.props.toggleForm()}
            >
              Add user
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {
  toggleForm: PropTypes.func,
};

export default Header;
