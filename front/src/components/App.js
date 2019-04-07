import Header from "./Header";
import UsersList from "./UsersList";

import config from "../app.config.js";
import React, { Component } from "react";
import { parseResponseJson } from "../helpers.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({
      loading: true,
    });
    fetch(config.rest.users)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          loading: false,
          users: parseResponseJson(responseData),
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <UsersList loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
