import React from 'react';
import {Route} from  "react-router-dom"
import {DataConsumer} from "./Context"

import TopNavBar from '../src/Components/Nav/TopNavBar'

import './App.css';

class App extends React.Component {

  render() {
    return (
        <div>
          <TopNavBar/>
          <h1>React App</h1>
        </div>
    )
  
  
  }
  
}
 
export default App;
