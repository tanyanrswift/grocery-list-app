import React from 'react';

export default function ItemCreate(props){
    return <form onSubmit={props.onSubmit}>
        <h2>Add A New Item</h2>
        <input type='text' name='purchased' placeholder='Purchased? Yes or No'/>
        <br />
        <input type='text' name='name' placeholder='Enter Item Name'/>
        <br />
        <button>Submit</button>
    </form>
}