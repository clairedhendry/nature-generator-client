import React from 'react'
import { DataContext } from '../../Context'

import { Link } from 'react-router-dom'
import './Color.css'


export default class Color extends React.Component {

static contextType = DataContext;

state = {
    colorChosen: this.props.color,
   
}

    handleButtonClick = () => {
        
        this.context.actions.updateSlideshowEngaged()
        this.context.actions.clearFetchData()        
        this.context.actions.updateColorChosen(this.props.color)   
    } 



render() {



let colorClassName = `${this.props.color}`
let opacity = this.props.opacity
let path = `/slideshow/${colorClassName}`

        return (
            <Link 
                to={path}
                className={colorClassName} 
                style={{opacity: opacity}}
                type="button" 
                aria-label={colorClassName} 
                id={colorClassName}
                onClick={this.handleButtonClick}>
            </Link>
         
        )
    }


}
