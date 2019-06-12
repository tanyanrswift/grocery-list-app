import React, { Component } from 'react';
import './style/landing.css';

class Landing extends Component {
    render(){
        return (
            <section>
                <h1 class='header'>Welcome!</h1>
                <p class='welcome-text'>Create a login in order to save your items and access them again later!</p>
                <p class='welcome-text'>Access your list items to edit and add!</p>
            </section>
        )
    }
}

export default Landing;