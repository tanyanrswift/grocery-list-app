import React from 'react';

export default function ItemForm(props){
    return <form onSubmit={props.onSubmit}>
        <h2>Add A New Item</h2>
        {/* <select>
            <option value='purchased'>Mark as Purchased</option>
            <option selected value='unpurchased'>Mark as Unpurchased</option>
        </select> */}
        <br />
        <input type='text' name='name' placeholder='Enter Item Name'/>
        <br />
        <input type="submit" value="Submit" />
    </form>
}