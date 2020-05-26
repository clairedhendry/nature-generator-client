import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { DataContext } from '../../Context'


class AudioPlayer extends React.Component {

static contextType = DataContext;

state = {
    audio: {
        ogg: this.context.state.audio.ogg,
        mp3: this.context.state.audio.mp3,
    }
}

// componentDidMount() {
//     this.setState({
//         audio: {
//             ogg: this.context.state.audio.ogg,
//             mp3: this.context.state.audio.mp3
//         }
//     })
// }


    render() {
        return (
            <div className="audio-player">
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