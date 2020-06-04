import React from 'react'
import Slideshow from './slideshow_new'
import ColorPicker from '../ColorPicker/ColorPicker'
import TopNavBar from '../Nav/TopNavBar'
import PixabayLogo from '../../image_files/Pixabay_Logo'


class SlideshowPage extends React.Component {

    render() {

        return (
            <div className="slideshow-page">
                <TopNavBar />
                <Slideshow />
                <ColorPicker />
                <PixabayLogo />
            </div>
        )
    }
}

export default SlideshowPage;