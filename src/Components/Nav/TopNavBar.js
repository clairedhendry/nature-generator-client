import React from 'react';
import { DataContext } from '../../Context';
import './TopNavBar.css';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

class TopNavBar extends React.Component {

    static contextType = DataContext;

onButtonClick = () => {
        this.context.actions.revertSlideshowEngaged()
    };

render() {

const track = this.props.track ? this.props.track : false;

    return (
        <nav className="top-nav-bar">
            <a href='/' onClick={this.onButtonClick}>Home</a>
            <div className="spacer"></div>
            <AudioPlayer track={track}/>
        </nav>
    )
    }
};

export default TopNavBar;