import React from 'react'
import './Slideshow.css'
import Slides from './slides'
import { DataContext } from '../../Context'
import { Slide } from 'react-slideshow-image'
import { Zoom } from 'react-slideshow-image'

// class Slideshow extends React.Component {

// static contextType = DataContext;


// checkForPhotos() {
    
//     if(this.context.state.photoData.length === 0) {
        
//         return (
//             <div>Loading...</div>
//         )
//     } else {
//     return this.context.state.photoData.hits.map((photo, index)=> 
//         <Slides key={photo.id} source={photo.webformatURL} type={photo.type} tags={photo.tags} index={index}/>)
// }

// }


// render() {

//         return (
//             <div className="slideshow-container">
//                <div className="slides">
//                    {this.checkForPhotos()}
//                </div>
//             </div>
//         )
//     }
// }



   
const zoomOutProperties = {
    duration: 10000,
    transitionDuration: 800,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: false,
    pauseOnHover: true
  }
   
class Slideshow extends React.Component {

  static contextType = DataContext;


  updateImages() {
    if(this.context.state.photoData.length === 0) {
        return (
                  <div>Loading...</div>
                )
    } else {
        return (
            <Zoom {...zoomOutProperties}>
            {
              this.context.state.photoData.hits.map((each, index) => 
              <img key={index} style={{width: "100%", maxHeight: "500px"}} src={each.webformatURL} />)
            }
          </Zoom>
        )
     
  }
}
  
componentDidMount() {
    this.updateImages()
}



    render() {


      return (
         
             <div className="slide-container">
                {this.updateImages()}
            </div>
         
      )
  }
}

export default Slideshow;