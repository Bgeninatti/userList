import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import "./UserForm.css";
import config from "../app.config.js";
import { getCookie } from "../helpers.js";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      loading: false,
      response: "",
      user: this.props.user,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = new FormData(e.target),
      user = {
        id: form.get("id"),
        email: form.get("email"),
      };
    if (user.id !== "0") {
      this._sendFormData(config.rest.users + user.id + "/", "PUT", user);
    } else {
      this._sendFormData(config.rest.users, "POST", { email: user.email });
    }
  }

  _sendFormData(uri, method, user) {
    this.setState({
      loading: true,
    });
    fetch(uri, {
      method: method,
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
    }).then((response) => {
      if (!response.ok) {
        response
          .json()
          .then((msg) => {
            this.setState({
              loading: false,
              response: "Email: " + msg["email"][0],
            });
          })
          .catch((error) => {
            this.setState({
              loading: false,
              response: "Something wrong has happened. Please, try again.",
            });
          });
        throw Error(response);
      }
      this.handleClose();
      this.props.fetchUsers();
    });
  }

  handleClose() {
    this.setState({
      loading: false,
      response: "",
    });
    this.props.toggleForm({ id: 0, email: "" });
  }

  render() {
    return (
      <>
        <div className="overlay fixed-bottom" onClick={this.handleClose} />
        <div className="UserFrom col-md-4 offset-md-4">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="userEmail">Email address</label>
                  <input type="hidden" name="id" value={this.state.user.id} />
                  <input
                    className="form-control"
                    name="email"
                    defaultValue={this.state.user.email}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Type a valid email address.
                  </small>
                </div>
                {this.state.loading ? (
                  <Spinner />
                ) : (
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={this.handleClose}
                      className="btn ml-3 btn-danger"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>
              {!!this.state.response & !this.state.loading ? (
                <div role="alert" className="alert mt-3 alert-danger">
                  {this.state.response}
                </div>
              ) : (
                <p />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  fetchUsers: PropTypes.func,
  toggleForm: PropTypes.func,
};

export default UserForm;
