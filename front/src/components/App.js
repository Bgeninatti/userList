import Header from "./Header";
import UsersList from "./UsersList";
import UserForm from "./UserForm";

import config from "../app.config.js";
import React, { Component } from "react";
import { parseResponseJson } from "../helpers.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listLoading: false,
      formUser: { id: 0, email: "" },
      renderForm: false,
      users: [],
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  toggleForm(user) {
    this.setState({
      formUser: user,
      renderForm: !this.state.renderForm,
    });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({
      listLoading: true,
    });
    fetch(config.rest.users)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          listLoading: false,
          users: parseResponseJson(responseData),
        });
      });
  }

  render() {
    return (
      <div>
        <Header toggleForm={this.toggleForm} />

        {this.state.renderForm ? (
          <UserForm
            user={this.state.formUser}
            toggleForm={this.toggleForm}
            fetchUsers={this.fetchUsers}
          />
        ) : null}

        <UsersList
          fetchUsers={this.fetchUsers}
          loading={this.state.listLoading}
          users={this.state.users}
          toggleForm={this.toggleForm}
        />
      </div>
    );
  }
}

export default App;
