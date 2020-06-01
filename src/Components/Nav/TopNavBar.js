import React from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context'
import './TopNavBar.css'
import TokenService from '../../services/token-service'

class TopNavBar extends React.Component {

    static contextType = DataContext;

handleLogOutClick = () => {

}

renderLogInForm() {
                
        return (
            <div className="navBar hidden">
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