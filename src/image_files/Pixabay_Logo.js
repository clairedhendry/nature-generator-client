import React from 'react'
import pixabay_logo from './pixabay_logo.png'
import './Pixabay_logo.css'

function PixabayLogo() {
    return (
        <div className="pixabay_logo">
            <p>Images from <a href="https://pixabay.com/" target="_blank"><img src={pixabay_logo}></img></a></p>
        </div>
    )
}

export default PixabayLogo;