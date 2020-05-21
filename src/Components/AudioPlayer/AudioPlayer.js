import React from 'react'
import { DataContext } from '../../Context'

class AudioPlayer extends React.Component {

static contextType = DataContext;

state = {
    audio: {
        ogg: this.context.state.audio.ogg,
        mp3: this.context.state.audio.mp3,
    }
}


    render() {
        return (
            <div className="audio-player">
                <audio controls>
                    <source src={this.state.audio.ogg} type="audio/ogg" />
                    <source src={this.state.audio.mp3} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
            </div>
        )
    }
}

export default AudioPlayer;