import React from 'react'
import ReactDOM from 'react-dom'
import TopNavBar from './TopNavBar'

it ('renders without crashing', () => {
    const sampleTrack = 'https://freesound.org/data/previews/450/450755_6253486-lq.mp3';
    const div = document.createElement('div');
    ReactDOM.render(<TopNavBar track={sampleTrack}/>, div);
    ReactDOM.unmountComponentAtNode(div);
})