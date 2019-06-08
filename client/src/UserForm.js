import React from 'react';

export default function UserForm(props){
    return (
        <section>
            <h2>User Sign Up</h2>
            <form onSubmit={props.onSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="Enter Username" />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="email" name="email" placeholder="Enter Email Address" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Enter Password" />
                </div>
                <div>
                   <label>Reenter Password:</label>
                    <input type="password" name="password-confirmation" placeholder="Reenter Password" />
                </div>
                <button>Sign Up</button>
            </form>
        </section>
    )
}