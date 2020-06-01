import React from 'react'
import './Slideshow.css'
import { render } from '@testing-library/react'


export default class Slides extends React.Component {

    render() {
        return(
            <div className="slide hidden">
                <img style={{display: "none"}} src={this.props.src} alt={`${this.props.type} of ${this.props.tags}`} />
            </div>
        )
    }
}

// class Slide extends React.Component {


// render() {

// const slideCss = `
//     height: 100%;
//     width: 100%;
//     background-image: url('${this.props.webformatURL});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     `

//     return(
//         <div style={this.slideCss}>

//         </div>
//     )
// }
// }

// export default Slide

