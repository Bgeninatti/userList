import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import "./UserForm.css";

class UserForm extends Component {
  render() {
    return (
      <div
        className={
          "UserFrom col-xs-4 ml-2 " + (this.props.isActive ? "show" : "hidden")
        }
      >
        <div className="card shadow">
          <div className="card-header">New User</div>
          <div className="card-body">
            <form onSubmit={this.props.handleSubmit}>
              <div className="form-group">
                <label htmlFor="userEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  name="email"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Type a valid email address.
                </small>
              </div>
              {this.props.isLoading ? (
                <Spinner />
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
            </form>
            {!!this.props.response & !this.props.isLoading ? (
              <div
                role="alert"
                className={
                  "alert mt-3 " +
                  (this.props.hasErrors ? "alert-danger" : "alert-success")
                }
              >
                {this.props.response}
              </div>
            ) : (
              <p />
            )}
          </div>
        </div>
      </div>
    );
  }
}
UserForm.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func,
  response: PropTypes.string,
};

export default UserForm;
