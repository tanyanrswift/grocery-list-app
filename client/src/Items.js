import React, { Component } from 'react';
import ItemForm from './ItemForm';

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
    createItem(e){
        e.preventDefault();
        fetch('http://localhost:8000/api/items/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: e.target.name.value
                //, purchased: e.target.purchased.value
            })
        })
        .then(res => res.json())
        .then(newItem => this.setState({items: [...this.state.items,newItem]}));
    }
    render(){
        return(
            <section>
                <ItemForm onSubmit={(e) => this.createItem(e)} />
                <h2>Items</h2>
                <ul>
                    {this.state.items.map(item =>
                        <ul>
                            <li>{item.name}</li>
                            {/* <li>{item.purchased}</li> */}
                        </ul>
                    )}
                </ul>
            </section>
        )
    }
}

export default Items;