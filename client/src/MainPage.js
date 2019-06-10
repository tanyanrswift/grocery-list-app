import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Landing from './Landing';
import Items from './Items';

class MainPage extends Component {
    render(){
        return (
            <div>
                <header>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='./items'>Items</Link>
                    </nav>
                </header>
                <main>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='./items' component={Items} />
                </main>
            </div>
        )
    }
}

export default MainPage;