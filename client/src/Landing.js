import React, { Component } from 'react';
import Navigation from './Navigation';

class Landing extends Component {
    render(){
        return (
            <section>
                <h1>Welcome!</h1>
                <Navigation />
            </section>
        )
    }
}

export default Landing;