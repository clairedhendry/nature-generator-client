import React from 'react'
import './Slideshow.css'
import config from '../../config'
import Slides from './slides'
import { DataContext } from '../../Context'


class Slideshow extends React.Component {

static contextType = DataContext;


checkForPhotos() {
    // if(this.context.state.photoData.length === 0) {
    //     return (
    //         <div>Loading...</div>
    //     )
    // } else {

    //     this.context.state.photoData.hits.map(photo => {
    //         return (
    //         <Slides source={photo.webformatURL} type={photo.type} tags={photo.tags} />
         
    //      )
    //     })
        
    // }
    
    if(this.context.state.photoData.length === 0) {
        
        return (
            <div>Loading...</div>
        )
    } else {
    return this.context.state.photoData.hits.map(photo => 
        <Slides key={photo.id} source={photo.webformatURL} type={photo.type} tags={photo.tags} />)
}

}


render() {


        return (
            <div className="slideshow-container">
               <div className="slides">
                   {this.checkForPhotos()}
               </div>
            </div>
        )
    }
}

export default Slideshow;