import React from 'react'
import './RegistrationForm.css'

class RegistrationForm extends React.Component {

state = {
    username: "",
    password: "",
    email: "",
}

//need to validate and secure user information
//this is temporary!
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

updateEmailAddress = (value) => {
    this.setState({
        email: value
    })
}

handleFormSubmit = (e) => {
    e.preventDefault();
}

    render() {
        return (
            <div className="registration-form-container">
                <form className="registration-form" onSubmit={e => this.handleFormSubmit(e)}>
                    Register an Account
                    <label htmlFor="username">Choose a username</label>
                    <input type="text" 
                        name="username"
                        placeholder="username"
                        onChange={e => this.updateUsername(e.target.value)}
                        value={this.state.username.value} 
                        />
                    <label htmlFor="password">Password</label>
                    <input type="text"
                        name="password"
                        placeholder="password"
                        onChange={e => this.updatePassword(e.target.value)}
                        value={this.state.password.value}
                        />
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        name="email"
                        placeholder="email address"
                        onChange={e => this.updateEmailAddress(e.target.value)}
                        value={this.state.email.value}
                        />
                    <button type="submit">Register</button>

                </form>
            </div>
        )
    }
}

export default RegistrationForm;