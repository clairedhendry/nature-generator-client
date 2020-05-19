import React from 'react'
import { Link } from 'react-router-dom'
import { DataConsumer } from '../../Context'
import { DataContext } from '../../Context'
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


checkIfLoggedIn() {
    if(!this.state.loggedIn) {
        return (
            <div>
                <div>User Login Form</div>
                <Link to='/registration'>Register</Link>
            </div>
        )
    } else {
        return (
        <div>Welcome back {this.state.userName}</div>
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