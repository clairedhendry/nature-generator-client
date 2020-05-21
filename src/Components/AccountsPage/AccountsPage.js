import React from 'react'
import { Route } from 'react-router-dom'
import './AccountsPage.css'
import SideNavBar from '../Nav/SideNavBar'
import MyPhotosPage from '../MyPhotosPage/MyPhotosPage'
import ProfilePage from '../ProfilePage/ProfilePage'

class AccountsPage extends React.Component {
    render() {
        return (
            <div>
                    <SideNavBar />
                <div className="accountsPage-container">
                    <Route path="accounts/:user_name/myphotos" component={MyPhotosPage} />
                    <Route path="accounts/:user_name/profile" component={ProfilePage} />
                </div>
            </div>
        )
    }
}

export default AccountsPage;