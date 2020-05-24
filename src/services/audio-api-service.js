import config from '../config'
import TokenService from './token-service';


const AudioApiService = {

    
generateAudioTrack(color, category) {
    //GET request to server for audio track
    //server should send back both ogg and mp3 versions of track
    return fetch('https://localhost:8000/audio', {
        method: "GET",
        header: {
            "Content-Type": "application/json",
            "Authorization": `basic ${TokenService.getAuthToken()}`,
            "color": color,
            "category": category,
        }
    })
        .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText)
            }
        })
        .then(data => 
            this.setState({
                audio: {
                    ogg: data.ogg,
                    mp3: data.mp3,
                }
            }))
        .catch(err => alert(`something went wrong: ${err.message}`))
    
    }

}

export default AudioApiService;