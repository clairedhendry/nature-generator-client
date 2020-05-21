import React from 'react'
import { DataContext } from '../../Context'
import ColorData from '../../ColorData/ColorData'
import Color from '../ColorPicker/Color'
import './ColorPicker.css'

class ColorPicker extends React.Component {

static contextType = DataContext;

    render() 
    {

// const colors = ColorData.imageCategories.map(color => {
//     if(!this.context.state.slideshowEngaged) {
//     return (
//         <Color color={color.color} key={color.id} path="./slideshow/"/>
//     ) }
//     else {
//         return (
//             <Color color={color.color} key={color.id} path=""/>
//         )
//     }
// })
    

const colors = ColorData.imageCategories.map(color => {
    
    return (
        <Color color={color.color} key={color.id}/>
    ) })

        return (
            <div className="colorPicker-box">
                Choose a color
                <div className="colors-box">
                {colors}
                </div>
            </div>
        )
    }
}

export default ColorPicker;