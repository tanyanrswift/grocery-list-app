import React, { Component } from 'react';
import ItemCreate from './ItemCreate';

class Items extends Component {
    state = {
        items: [],
        // item: {
        //     name: '',
        //     purchased: false
        // }
        single: null
    }
    componentDidMount(){
        this.showAll();
    }
    showAll(){
        fetch('http://localhost:8000/api/items')
        .then(res => res.json())
        .then(items => this.setState({items}))
    }
    showSingle(e, id){
        e.preventDefault();
        fetch(`httpL//localhost:8000/api/items/${id}`)
        .then(res => res.json())
        .then(single => this.setState({single}))
    }
    createItem(e){
        e.preventDefault();
        fetch('http://localhost:8000/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: e.target.name.value, purchased: e.target.purchased.value})
        })
        .then(res => res.json())
        .then(newItem => this.setState({items: [...this.state.items, newItem]}));
    }
    render(){
        return(
        <section>
            <ItemCreate onSubmit={(e) => this.createItem(e)} />
            <ul>
                {this.state.items.map(item =>{
                    return <a href={item.id} onClick={(e) => this.showSingle(e, item.id)}>
                        <li>{item.name} / {item.purchased}</li>
                    </a>
                })}
            </ul>
            {this.state.single && <article>
                <h1>{this.state.single.name}</h1>
                <p>{this.state.single.purchased}</p>
            </article>}
        </section>

            // <section>
            //     {this.state.items.map(item => {
            //         <input value={item.name}
            //             onChange={e => this.setState({ item: {...item, name: e.target.name.value}})} />
            //         <input value={item.purchased}
            //             onChange={e => this.setState({ item: {...item, purchased: e.target.purchased.value}})} />
            //         <button onClick={this.createItem}>Create</button>
            //     })}
            // </section>
        )
    }
}

export default Items;