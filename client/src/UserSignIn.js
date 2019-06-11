import React, {Component} from 'react';

class UserSignIn extends Component {
    checkSignIn(e){
        e.preventDefault();
        fetch('http://localhost:8000/api/users/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify({email: e.target.email, password: e.target.password})
        })
    }
    render(){
        return (
            <div>
                <h2>Sign In</h2>
                <form onSubmit={this.checkSignIn}>
                    <input type='email' name='email' placeholder='Enter email address' />
                    <br />
                    <input type='password' name='password' placeholder='Enter password' />
                    <input type='submit' name='Submit' />
                </form>
            </div>
        )
    }
}

export default UserSignIn;