import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer from './AudioPlayer'



it ('renders without crashing', () => {
    const sampleTrack = 'https://freesound.org/data/previews/450/450755_6253486-lq.mp3';
    const div = document.createElement('div');
    ReactDOM.render(<AudioPlayer track={sampleTrack}/>, div);
    ReactDOM.unmountComponentAtNode(div);
})