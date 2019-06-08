import React, { Component } from 'react';

class Landing extends Component {
    render(){
        return (
            <section>
                <nav>
                    <img src={require('./grocery-icon.png')} alt="grocery bag icon" />
                    <ul>Sign Up</ul>
                    <ul>Sign In</ul>
                    <ul>Sign Out</ul>
                </nav>
                <h1>Welcome!</h1>
            </section>
        )
    }
}

export default Landing;