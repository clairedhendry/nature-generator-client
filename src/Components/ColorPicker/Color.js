import React from 'react'
import { DataContext } from '../../Context'
import { Link } from 'react-router-dom'
import './Color.css'


export default class Color extends React.Component {

static contextType = DataContext;

handleButtonClick = () => {
    this.context.actions.updateColorChosen(this.props.color)
    this.context.actions.updateSlideshowEngaged()
} 

    render() {


let colorClassName = `${this.props.color}`

let path = `/slideshow/${colorClassName}`

        return (
            <Link 
                to={path}
                className={colorClassName} 
                type="button" 
                aria-label={colorClassName} 
                id={colorClassName}
                onClick={this.handleButtonClick}>
            </Link>
         
        )
    }


}
