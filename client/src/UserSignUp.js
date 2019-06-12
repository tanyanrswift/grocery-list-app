import React from 'react';

export default function UserSignUp(props){
    return <form onSubmit={props.onSubmit}>
        <h2 class='user-form'>User Sign Up</h2>
        <div>
            <label>Email Address:</label>
            <input type="email" name="email" placeholder="Enter Email Address" />
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Enter Password" />
        </div>
        <input type='submit' value='Submit' />
    </form>
}