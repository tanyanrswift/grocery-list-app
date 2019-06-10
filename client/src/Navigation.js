import React, {Component} from 'react';

class Navigation extends Component {
    render(){
        return(
            <ul>
                <li><a href="home" onClick={e => this.props.onSelect('/')}>Home</a></li>
                <li><a href="items" onClick={e => this.props.onSelect('/items')}>Items</a></li>
                <li>Sign In</li>
                <li>Sign Out</li>
                <li>Sign Up</li>
            </ul>
        )
    }
}

export default Navigation;