import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserSignUp from './UserSignUp';

class Landing extends Component {
    render(){
        return (
            <section>
                <nav>
                    <ul>
                        <img src={require('./grocery-icon.png')} alt="grocery bag icon" />
                        <li>Sign Up</li>
                        <li>Sign In</li>
                        <li>Sign Out</li>
                    </ul>
                </nav>
                <h1>Welcome!</h1>
            </section>
        )
    }
}

export default Landing;