import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserSignUp from './UserSignUp';

class Landing extends Component {
    render(){
        return (
            <section>
                <nav>
                    <Link to='/'><img src={require('./grocery-icon.png')} alt="grocery bag icon" /></Link>
                    <Link to='./UserSignUp'>Sign Up</Link>
                    <ul>Sign In</ul>
                    <ul>Sign Out</ul>
                </nav>
                <h1>Welcome!</h1>
            </section>
        )
    }
}

export default Landing;