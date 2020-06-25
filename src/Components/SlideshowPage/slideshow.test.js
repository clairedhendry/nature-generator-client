import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './slideshow_new';

it ('renders without crashing', () => {
    const sampleImage = ['https://pixabay.com/get/54e7dd4b4c54ae14f1dc84609629327d1d39dce4504c704c7c2e79d39e4ac'];
    const div = document.createElement('div');
    ReactDOM.render(<Slideshow photos={sampleImage}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});