import React, { Component } from "react";
import PropTypes from "prop-types";

class UserCard extends Component {
  render() {
    return (
      <div className="card m-3">
        <div className="card-header">#{this.props.id}</div>
        <div className="card-body">
          <p className="card-text">{this.props.email}</p>
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserCard;
