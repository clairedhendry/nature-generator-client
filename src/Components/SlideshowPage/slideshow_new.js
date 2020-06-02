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
                }, 10000)
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
                    <div className="slide fade-in"
                    id={i}
                    key={i}
                    style={{ backgroundImage: `url(${img.webformatURL})`}}
                    />
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
                    <div className="slide fade-in"
                    id={i}
                    key={i}
                    style={{ backgroundImage: `url(${img.largeImageURL})`}}
                    />
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
                {/* <div className="slideshow">
                    {this.context.state.photoData.hits.map(
                        (img, i) => 
                       
                        this.state.currentImage === i && (
                            <div className="slide fade-in"
                            id={i}
                            key={i}
                            style={{ backgroundImage: `url(${img.photoWidth})`}}
                            />
                        )
                        
                    )}
                </div> */}
                {photos}
            </div>
        )
    }

}