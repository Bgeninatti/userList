import React, { Component } from "react";

class EmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = { email: this.props.defaultEmail };
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <input
        className="form-control"
        name="email"
        onChange={this.handleChange}
        value={this.state.email}
      />
    );
  }
}

export default EmailInput;
