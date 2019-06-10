import React, {Component} from 'react';
import Landing from './Landing';
import Items from './Items';
import Navigation from './Navigation';

class MainPage extends Component {
    state = {
        current: '/'
    }
    select = (section) => {
        this.setState({current: section});
    }
    render(){
        let section;
        if(this.state.current === '/'){
            let section = <Landing />
        } else if(this.state.current === '/items'){
            let section = <Items />
        }
        return (
            <div>
                <Navigation onSelect={this.select} />
                <p>{section}</p>
            </div>
        )
    }
}

export default MainPage;