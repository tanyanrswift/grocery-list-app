import React, { Component } from 'react';
import UserSignUp from './UserSignUp';

class Users extends Component {
    state = {
        users: []
    }
    
    // createUser(e){
    //     e.preventDefault();
    //     fetch('http://localhost:8000/api/users',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({username: e.target.username.value, email: e.target.email.value, password: e.target.password.value})
    //     })
    //     .then(res => res.json())
    //     .then(newUser => this.setState({users: [...this.state.users, newUser]}));
    // }
    render(){
        return(
            <section>
                <UserSignUp onSubmit={(e) => this.createUser(e)} />
            </section>
        )
    }
}

export default Users;