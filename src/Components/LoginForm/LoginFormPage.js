import React from 'react'
import LoginForm from './LoginForm'
import './LoginForm.css'



export default class LoginFormPage extends React.Component {


    render() {



        return(
            <div className="loginForm-main-box">
            <LoginForm />
            </div>
        )
    }
}