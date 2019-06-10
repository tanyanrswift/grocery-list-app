import React from 'react';

export default function ItemCreate(props){
    return <form onSubmit={props.onSubmit}>
        <input type='checkbox' name='purchased'/>
        <p>Mark as Purchased</p>
        <input type='text' name='name'/>
        <button>Submit</button>
    </form>
}