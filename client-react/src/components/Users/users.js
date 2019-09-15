import React, { Component } from 'react';
import './users.css';
import axios from 'axios';

class Users extends Component {
    constructor(){
        super();
        this.state= {
            users: []
        }
    };

componentDidMount(){
// fetch('/api/users')
// .then(res => res.json()).then(users => this.setState({users}, () => console.log('peeps fetched!', users)));


axios
.get("http://localhost:3001/users/userList", {
  headers: { Authorization: localStorage.getItem("jwtToken") }
})
.then(response => {
  this.setState({ projects: response.data });
  console.log(response.data);
});

};

    render() {
        return (
            <div>
                <h3>List of Users</h3>
                <ul>
                    {this.state.users.map(users => <li key={users.id}> {users.id} {users.name} {users.email} </li>)}
                </ul>

            </div>
        )
    }
}

export default Users;
