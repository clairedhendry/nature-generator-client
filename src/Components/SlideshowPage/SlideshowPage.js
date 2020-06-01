import React from 'react'
import Slideshow from './Slideshow'
import ColorPicker from '../ColorPicker/ColorPicker'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import Footer from '../Footer/Footer'
import { DataContext } from '../../Context'

class SlideshowPage extends React.Component {

static contextType = DataContext


    render() {

        return (
            <div>
                <Slideshow />
                <ColorPicker />
                <AudioPlayer />
                <Footer />
            </div>
        )
    }
}

export default SlideshowPage;