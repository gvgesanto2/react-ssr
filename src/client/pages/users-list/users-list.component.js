import React, { Component } from 'react';

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => 
      <li key={user.id}>{user.name}</li>
    );
  }

  render() {
    return (
      <div>
        <h2>Heres a big list of users:</h2>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

export default UsersListPage;