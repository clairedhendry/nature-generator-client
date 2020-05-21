import React from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context'
import LoginForm from '../LoginForm/LoginForm'
import './TopNavBar.css'


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

checkIfLoggedIn = () => {
 
    if(!this.state.loggedIn) {
        return (
            <div className="navBar">
                {/* <Link to='/login'>Login</Link> */}
                <LoginForm/>
                <Link to='/registration'>Register</Link>
                <Link to='/'>Home</Link>
            </div>
        )
    } else {
        return (
        <div className="navBar">
            <div>Welcome back {this.state.userName}</div>
            <Link to="/accounts/:user_name">Account</Link>
            <Link to='/'>Home</Link>
        </div>
        )
    }
    
}


    render() {

const options = this.checkIfLoggedIn();
    

        return (

            <div className="top-nav-bar">
                {options}
            </div>
                
                
          
        )
    }
}

export default TopNavBar;