import React, {Component} from 'react';
import Landing from './Landing';
import Items from './Items';
import Navigation from './Navigation';

class MainPage extends Component {
    state = {
        currentSection: '/'
    }
    selectSection = (section) => {
        this.setState({currentSection: section});
    }
    render(){
        let section;
        if(this.state.currentSection === '/'){
            section = <Landing />
        } else if(this.state.currentSection === '/items'){
            section = <Items />
        }
        return (
            <div>
                <Navigation onSelect={this.selectSection} />
                {section}
            </div>
        )
    }
}

export default MainPage;