import React, { Component } from 'react';

class Items extends Component {
    state = {
        items: []
    }
    componentDidMount(){
        this.showAll();
    }
    showAll(){
        fetch('http://localhost:8000/api/items')
        .then(res => res.json())
        .then(data =>
            this.setState({items: data})
        )
    }
    render(){
        return(
            <section>
                <h2>Items</h2>
                <ul>
                    {this.state.items.map(item =>
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.purchased}</li>
                        </ul>
                    )}
                </ul>
            </section>
        )
    }
}

export default Items;