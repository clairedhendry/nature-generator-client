import React from 'react'
import { DataContext } from '../../Context'
import ColorData from '../../ColorData/ColorData'
import Color from '../ColorPicker/Color'
import './ColorPicker.css'

class ColorPicker extends React.Component {

static contextType = DataContext;

renderColors() {
    let colors;
    let className = 0.5
    const test = this.props.test ? this.props.test : !this.context.state.slideshowEngaged;
if(test) {
    colors = ColorData.imageCategories.map(color => {

    return (
        <Color color={color.color} key={color.id} />
        )

})
} else {
    colors = ColorData.imageCategories.map(color => {
        return (
    
                <Color color={color.color} key={color.id} opacity={className}/>
         
        )
    })
} return colors;
}

componentDidMount() {
    this.renderColors()
}

render() {

    const colors = this.renderColors()

  return (
            <div className="colorPicker-box"> 
                <div className="colors-box">
                {colors}
                </div>
            </div>
        )
    }
}

export default ColorPicker;