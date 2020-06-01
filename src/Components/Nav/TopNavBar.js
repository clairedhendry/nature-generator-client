import React from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context'
import LoginForm from '../LoginForm/LoginForm'
import './TopNavBar.css'
import TokenService from '../../services/token-service'


//top nav bar needs to: 
// link to registration form 
// provide login form
// link to home page (if not on home page)
// logout button (if logged in)

class TopNavBar extends React.Component {

    static contextType = DataContext;

    state = {
        loggedIn: this.context.state.loggedIn,
        userName: this.context.state.user.userName,
    }

handleLogOutClick = () => {

}

renderLogInForm() {
                
        return (
            <div className="navBar">
                {/* <LoginForm/>
                <Link to='/registration'>Register</Link> */}
                <Link to='/'>Home</Link>
            </div>
        )
    }
    
renderLogOutLink() {
        return (
        <div className="navBar">
            {/* <Link onClick={this.handleLogOutClick} to='/'>LogOut</Link>
            <Link to="/accounts/:user_name">Account</Link> */}
            <Link to='/'>Home</Link>
        </div>
        )
    }
    



    render() {
        return (

            <nav className="top-nav-bar">
                {TokenService.hasAuthToken() 
                ? this.renderLogOutLink()
                : this.renderLogInForm()}
            </nav>
                
                
          
        )
    }
}

export default TopNavBar;