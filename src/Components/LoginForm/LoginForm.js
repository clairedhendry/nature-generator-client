import React from 'react'
import './LoginForm.css'
import {DataContext} from '../../Context'

export default class LoginForm extends React.Component {

static contextType = DataContext;

state = {
    username: "",
    password: "",
}

handleFormSubmit = (e) => {
    e.preventDefault();
    //validate credentials
    this.context.actions.updateLoggedIn();
    this.setState({
        loggedIn: true
    })
}



//need to validate login credentials
//secure/encode information
//check against database
//update handlers are temporary!

updateUsername = (value) => {
    this.setState({
        username: value
    })
}

updatePassword = (value) => {
    this.setState({
        password: value
    })
}

    render() {
        return(
            <div className="loginForm-container">
                <form className="loginForm" onSubmit={e => this.handleFormSubmit(e)}>
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                        name="username"
                        placeholder="username"
                        size="12"
                        onChange={e => this.updateUsername(e.target.value)}
                        value={this.state.username.value} 
                        />
                        <br />
                    <label htmlFor="password">Password</label>
                    <input type="text"
                        name="password"
                        placeholder="password"
                        size="12"
                        onChange={e => this.updatePassword(e.target.value)}
                        value={this.state.password.value}
                    />
                    <br />
                    <button type="submit">Login</button>
                </form>

            </div>
        )
    }
}