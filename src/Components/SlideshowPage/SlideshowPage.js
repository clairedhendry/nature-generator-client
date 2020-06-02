import React from 'react'
import Slideshow from './slideshow_new'
import ColorPicker from '../ColorPicker/ColorPicker'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import Footer from '../Footer/Footer'
import TopNavBar from '../Nav/TopNavBar'


class SlideshowPage extends React.Component {

    render() {

        return (
            <div className="slideshow-page">
                <TopNavBar />
                {/* <AudioPlayer /> */}
                <Slideshow />
                <ColorPicker />
                <Footer />
            </div>
        )
    }
}

export default SlideshowPage;