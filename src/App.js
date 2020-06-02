import React from 'react';
import {Route} from  "react-router-dom"
import {DataContext} from './Context'

import SlideshowPage from '../src/Components/SlideshowPage/SlideshowPage'
import HomePage from '../src/Components/HomePage/HomePage'


import './App.css';


class App extends React.Component {

static contextType = DataContext;

updatePhotos = () => {
  
    if(this.context.state.photoData.length === 0) {
      return (
        <main>
        <Route exact path="/" component={HomePage}/>
        
        {/* <Route exact path="/registration" component={RegistrationPage}/>
        <Route path="/accounts/:user_name" component={AccountsPage}/> */}
      </main>
      )
    } else {
      return (
        <main>
        <Route exact path="/" component={HomePage}/>
        <Route path="/slideshow/:color" component={SlideshowPage}/>
      </main>
      )
    }
  }


  render() {

const photos = this.updatePhotos()
    return (
      <div className="main_body">
        {/* <div>
          <TopNavBar />
        </div> */}
        {/* <main>
          <Route exact path="/" component={HomePage}/>
          <Route path="/slideshow/:color" component={SlideshowPage}/>
          <Route exact path="/registration" component={RegistrationPage}/>
          <Route path="/accounts/:user_name" component={AccountsPage}/>
        </main> */}

        {photos}
      </div>
    )
  
  
  }
  
}
 
export default App;
