import React from 'react'
import { DataContext } from '../../Context'
import ColorData from '../../ColorData/ColorData'
import Color from '../ColorPicker/Color'
import './ColorPicker.css'

class ColorPicker extends React.Component {

static contextType = DataContext;



render() {

let className = 'colorPicker-box';
if(this.props.isActive) {
    className += ' hidden';
}

const colors = ColorData.imageCategories.map(color => {

    return (
        <Color color={color.color} key={color.id} />
        )

})
  return (
            <div className={className}>
                Choose a color
                <div className="colors-box">
                {colors}
                </div>
            </div>
        )
    }
}

export default ColorPicker;