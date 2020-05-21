import React from 'react'
import './Slideshow.css'
import { DataContext } from '../../Context'


class Slideshow extends React.Component {

static contextType = DataContext;

    render() {
        return (
            <div className="slideshow-container">
               <div className="slides">
                   <h1>Photos!</h1>
                    <p>color: {this.context.state.colorChosen}</p>
                    <p>category: {this.context.state.categoryChosen}</p>
               </div>
            </div>
        )
    }
}

export default Slideshow;