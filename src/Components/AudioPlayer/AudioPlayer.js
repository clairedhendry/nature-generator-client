import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { DataContext } from '../../Context'
import './AudioPlayer.css'


class AudioPlayer extends React.Component {

static contextType = DataContext;

    render() {

const track = this.props.track ? this.props.track : this.context.state.audio.mp3;
        
        return (
            <div className="audio-player hidden">
                <ReactAudioPlayer
                    src={track}
                    autoPlay
                    controls
                    loop
                />
            </div>
        )
    }
}

export default AudioPlayer;