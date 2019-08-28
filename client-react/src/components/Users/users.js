import React, { Component } from 'react';
import './users.css';

class Users extends Component {
    constructor(){
        super();
        this.state= {
            users: []
        }
    };

componentDidMount(){
fetch('/api/users')
.then(res => res.json()).then(users => this.setState({users}, () => console.log('peeps fetched!', users)));

};

    render() {
        return (
            <div>
                <h3>List of Users</h3>
                <ul>
                    {this.state.users.map(users => <li key={users.id}> {users.id} {users.firstName} {users.lastName} </li>)}
                </ul>

            </div>
        )
    }
}

export default Users;
