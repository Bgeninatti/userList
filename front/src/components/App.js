import Header from "./Header";
import UsersList from "./UsersList";
import UserForm from "./UserForm";

import config from "../app.config.js";
import React, { Component } from "react";
import { parseResponseJson, getCookie } from "../helpers.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      loading: false,
      formActive: false,
      formLoading: false,
      hasErrors: false,
      formUser: {},
      formResponse: "",
      users: [],
    };
  }

  componentWillMount() {
    this.fetchUsers();
  }

  toggleForm() {
    this.setState({ formActive: !this.state.formActive });
  }

  fetchUsers() {
    this.setState({
      loading: true,
    });
    fetch(config.rest.users)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          loading: false,
          users: parseResponseJson(responseData),
        });
      });
  }

  createUser(user) {
    this.setState({
      formLoading: true,
    });
    fetch(config.rest.users, {
      method: "POST",
      body: JSON.stringify({ email: user.get("email") }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
    }).then((response) => {
      if (!response.ok) {
        var errors = response
          .json()
          .then((msg) => {
            this.setState({
              formLoading: false,
              hasErrors: true,
              formResponse: "Email: " + msg["email"][0],
            });
          })
          .catch((error) => {
            alert(response.statusText);
          });
        throw Error(response);
      }
      this.fetchUsers();
      this.setState({
        formLoading: false,
        hasErrors: false,
        formResponse: "User created successfully",
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = new FormData(event.target);
    if (!user.get("id")) {
      this.createUser(user);
    }
  }

  render() {
    return (
      <div>
        <Header toggleForm={this.toggleForm} />
        <UserForm
          user={this.state.formUser}
          handleSubmit={this.handleSubmit}
          isActive={this.state.formActive}
          isLoading={this.state.formLoading}
          hasErrors={this.state.hasErrors}
          response={this.state.formResponse}
        />
        <UsersList loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
