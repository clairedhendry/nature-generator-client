import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './slideshow_new'



it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Slideshow />, div);
    ReactDOM.unmountComponentAtNode(div);
})