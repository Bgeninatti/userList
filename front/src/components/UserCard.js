import React, { Component } from "react";
import PropTypes from "prop-types";
import config from "../app.config.js";

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.handleForm = this.handleForm.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  handleForm() {
    this.props.toggleForm(this.props.user);
  }

  deleteUser(id) {
    fetch(config.rest.users + this.props.user.id + "/", {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        alert("Something wrong has happened. Please, try again.");
        return;
      }
      this.props.fetchUsers();
    });
  }
  render() {
    return (
      <div className="card m-3">
        <div className="card-header">
          <span className="align-middle">#{this.props.user.id}</span>
          <div className="float-right">
            <button
              type="button"
              onClick={this.handleForm}
              className="btn btn-info btn-sm mr-2"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={this.deleteUser}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{this.props.user.email}</p>
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  toggleForm: PropTypes.func,
  fetchUsers: PropTypes.func,
};

export default UserCard;
