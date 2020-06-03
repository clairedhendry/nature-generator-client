import React from 'react'

import { DataContext } from '../../Context'
import './TopNavBar.css'

import AudioPlayer from '../AudioPlayer/AudioPlayer'

class TopNavBar extends React.Component {

    static contextType = DataContext;

    onButtonClick = () => {
        this.context.actions.revertSlideshowEngaged()
    }

    render() {



        return (



            <nav className="top-nav-bar">
                <a href='/' onClick={this.onButtonClick}>Home</a>
                <div className="spacer"></div>
                <AudioPlayer />
            </nav>
                
                
          
        )
    }
}

export default TopNavBar;