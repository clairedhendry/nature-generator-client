import React from 'react'
import ReactDOM from 'react-dom'
import ColorPicker from './ColorPicker'
import { BrowserRouter } from 'react-router-dom'


it ('renders without crashing', () => {
    const test = true
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <ColorPicker test={test}/>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
})