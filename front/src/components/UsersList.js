import React, { Component } from "react";
import UserCard from "./UserCard";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

class UsersList extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-8 offset-2 mt-3">
            {this.props.loading ? (
              <Spinner margin={true} />
            ) : this.props.users.length > 0 ? (
              this.props.users.map((user) => {
                return (
                  <UserCard key={user.id} id={user.id} email={user.email} />
                );
              })
            ) : (
              <p>No users found</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

UsersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
};

export default UsersList;
