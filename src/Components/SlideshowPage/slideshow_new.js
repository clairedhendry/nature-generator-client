import React from 'react'
import { DataContext } from '../../Context'
import './slideshow_new.css'

export default class Slideshow extends React.Component {

    static contextType = DataContext;

    state = {
 
        currentImage: 0
    }

    static timer = null;

    componentDidMount() {
      
        this.timer = setInterval( () => {
            let currentImage = this.state.currentImage + 1;
            if(currentImage >= this.context.state.photoData.hits) {
                currentImage = 0;
            }
            this.setState({
                currentImage
            })
                }, 60000)
        }
    

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    renderPhoto() {
        const width = window.innerWidth;
        if(width <= 500) {
            return(
            <div className="slideshow">
            {this.context.state.photoData.hits.map(
                (img, i) => 
            
                this.state.currentImage === i && (
                    <img className="slide fade-in" key={i} id={i} src={img.webformatURL} alt={`${img.type} of ${img.tags}`} />
                    )
                    
                )}
            </div>
            )}
        else {
            return (
            <div className="slideshow">
             {this.context.state.photoData.hits.map(
                (img, i) => 
           
                this.state.currentImage === i && (
                    <img className="slide fade-in" key={i} id={i} src={img.largeImageURL} alt={`${img.type} of ${img.tags}`} />
                    )
                
                )}
            </div>
                )
            }
        }

    render() {

 
    const photos = this.renderPhoto()

        return (
            <div className="slideshow-container">
                {photos}
            </div>
        )
    }

}