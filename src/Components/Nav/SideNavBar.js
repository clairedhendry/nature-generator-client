import React from 'react'
import './SideNavBar.css'


export default class SideNavBar extends React.Component {

    render() {
        return(
            <div className="sidebar-container">
                <a href="/accounts/:user_name/profile">Profile</a>
                <br />
                <a href="/accounts/:user_name/myphotos">My Photos</a>
            </div>
        )
    }
}