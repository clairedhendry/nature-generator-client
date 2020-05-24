import React from 'react'
import './Slides.css'

export default class Slides extends React.Component {

    render() {
        return(
            <div className="slide">
                <img src={this.props.source} alt={`${this.props.type} of ${this.props.tags}`} />
            </div>
        )
    }
}