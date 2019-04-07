import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">
          Users List
        </a>
      </nav>
    );
  }
}

export default Header;
