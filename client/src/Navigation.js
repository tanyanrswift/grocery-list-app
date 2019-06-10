import React, {Component} from 'react';

class Navigation extends Component {
    render(){
        return(
            <div>
                <header>
                    <nav>
                        <a href="#home" onClick={e => this.props.onSelect('/')}>Home</a>
                        <a href="#items" onClick={e => this.props.onSelect('/items')}>Items</a>
                        <a href='#signIn' onClick={e => this.props.onSelect('/signIn')}>Sign In</a>
                        <a href='#signOut' onClick={e => this.props.onSelect('/signOut')}>Sign Out</a>
                        <a href='#signUp' onClick={e => this.props.onSelect('/signUp')}>Sign Up</a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navigation;