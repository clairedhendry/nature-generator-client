import React from 'react'
import { Link } from 'react-router-dom'
import { DataConsumer } from '../../Context'
import './TopNavBar.css'

//top nav bar needs to: 
// link to registration form 
// provide login form
// link to home page (if not on home page)
// logout button (if logged in)

class TopNavBar extends React.Component {

    


    render() {
        return (
            <div>
                <DataConsumer>
                    {value => (
                        <div className="top-nav-bar">

                        </div>
                    )}
                </DataConsumer>
                
            </div>
        )
    }
}

export default TopNavBar;