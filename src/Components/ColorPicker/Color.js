import React from 'react'
import { DataContext } from '../../Context'
import './Color.css'


export default class Color extends React.Component {

static contextType = DataContext;

handleButtonClick = () => {
    this.context.actions.updateColorChosen(this.props.color)
} 

    render() {

let colorClassName = ""
if(this.props.color) {
    colorClassName += this.props.color
}

        return (
            <div >
               <button 
               className={colorClassName} 
               type="button" 
               aria-label={colorClassName} 
               id={colorClassName}
               onClick={this.handleButtonClick}>
                   
               </button>
            </div>
        )
    }


}
