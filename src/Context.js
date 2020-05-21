import React from 'react'
import ColorData from './ColorData/ColorData'

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

state = {
    colorChosen: '',
    categoryChosen: '',
    chosenColorCategories: '',
    user: {
        userName: 'demo-user',
        password: 'demo-password',
        email: 'demo@email.com'
    },
    loggedIn: false,
    audio: {
        ogg: "",
        mp3: "",
    },
    slideshowEngaged: false,
    slides: [],
    authorization: "",
}


updateColorChosen = (value) => {

    const colorItem = ColorData.imageCategories.find(item => item.color === value);
    const category = colorItem.category[(Math.floor(Math.random() * colorItem.category.length + 0))];

    this.setState({
        colorChosen: value,
        categoryChosen: category
    })
}

updateSlideshowEngaged = () => {
    if(!this.state.slideshowEngaged)
    this.setState({
        slideshowEngaged: true,
    })
}

updateColorCategories = (value) => {
    const color = ColorData.imageCategories.find(color => color.color === value)
    return color.category
}


generateSlideshow = (color, category) => {
//send information to server for GET request
//server should return from API based on color and category selections
fetch('https://localhost:8000/slides', {
    method: "GET",
    header: {
        "Content-Type": "application/json",
        "Authorization": this.state.authorization,
        "color": color,
        "category": category
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
            slides: data
        }))
    .catch(err => alert(`something went wrong: ${err.message}`))

}

generateAudioTrack = (color, category) => {
//GET request to server for audio track
//server should send back both ogg and mp3 versions of track
    fetch('https://localhost:8000/audio', {
    method: "GET",
    header: {
        "Content-Type": "application/json",
        "Authorization": this.state.authorization,
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

updateLoggedIn = () => {
    if(!this.state.loggedIn) {
        this.setState({
            loggedIn: true
        })
    }
}

render() {
    return (
        <DataContext.Provider
            value={{
                state: {
                    ...this.state
                },
                actions: {
                    updateColorChosen: this.updateColorChosen,
                    updateSlideshowEngaged: this.updateSlideshowEngaged,
                    generateSlideshow: this.generateSlideshow,
                    generateAudioTrack: this.generateAudioTrack,
                    updateLoggedIn: this.updateLoggedIn,
                    updateColorCategories: this.updateColorCategories,
                }
            }}>
                {this.props.children}
            </DataContext.Provider>
    )
};
}

export const DataConsumer = DataContext.Consumer;