import React from 'react';
import {Route} from  "react-router-dom"
import {DataConsumer} from './Context'
import {DataContext} from './Context'

import TopNavBar from '../src/Components/Nav/TopNavBar'
import SlideshowPage from '../src/Components/SlideshowPage/SlideshowPage'
import RegistrationPage from './Components/RegistrationPage/RegistrationPage'
import HomePage from '../src/Components/HomePage/HomePage'
import AccountsPage from '../src/Components/AccountsPage/AccountsPage'

import './App.css';

class App extends React.Component {

static contextType = DataContext;

state = {
  colorChosen: this.context.state.colorChosen,
  categoryChosen: this.context.state.categoryChosen,
  user: {
      username: 'demo-user',
      password: 'demo-password',
      email: 'demo@email.com'
  },
  loggedIn: false
}

  render() {


    return (
      <div className="main_body">
        <div>
          <TopNavBar />
        </div>
        <main>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/slideshow" component={SlideshowPage}/>
          <Route exact path="/registration" component={RegistrationPage}/>
          <Route path="/accounts/:user_name" component={AccountsPage}/>
        </main>
      </div>
    )
  
  
  }
  
}
 
export default App;
