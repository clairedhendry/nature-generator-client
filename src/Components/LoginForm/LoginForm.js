import React from 'react'
import './LoginForm.css'
import {DataContext} from '../../Context'
import TokenService from '../../services/token-service'

export default class LoginForm extends React.Component {

static contextType = DataContext;

state = {
    username: "",
}

handleSubmitBasicAuth = (e) => {

     e.preventDefault()
    const { user_name, password } = e.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )

    user_name.value = ''
    password.value = ''
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

    render() {



        return(
            <div className="loginForm-container">
                <form className="loginForm" onSubmit={this.handleSubmitBasicAuth}>
                    <label htmlFor="user_name">Username</label>
                    <input type="text" 
                        name="user_name"
                        placeholder="username"
                        size="12"
                        onChange={e => this.updateUsername(e.target.value)}
                        id="Login_user_name"
                        required
                        />
                        <br />
                    <label htmlFor="password">Password</label>
                    <input type="text"
                        name="password"
                        placeholder="password"
                        size="12"
                        id="Login_password"
                        required
                    />
                    <br />
                    <button type="submit">Login</button>
                </form>

            </div>
        )
    }
}