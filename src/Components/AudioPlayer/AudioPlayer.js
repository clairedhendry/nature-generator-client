import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { DataContext } from '../../Context'
import './AudioPlayer.css'


class AudioPlayer extends React.Component {

static contextType = DataContext;

    render() {


        
        return (
            <div className="audio-player hidden">
                <ReactAudioPlayer
          
                    src={this.context.state.audio.ogg} type="audio/ogg" 
                    src={this.context.state.audio.mp3} type="audio/mpeg"
                    autoPlay
                    controls
                    loop
                   
                />
            </div>
        )
    }
}

export default AudioPlayer;