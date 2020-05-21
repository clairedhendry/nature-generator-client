import React from 'react'
import Photo from './Photo'
import { DataContext } from '../../Context'
import './MyPhotosPage.css'

import dummy_photos from '../../dummyData/dummy_photos'


export default class MyPhotosPage extends React.Component {

static contextType = DataContext;

state = {
    searchOption: "color",
}

updateSearchOption = (value) => {
    this.setState({
        searchOption: value
    })
}    

render() {

const photos = dummy_photos.dummy_photos.map(photo => {
    return (
        <div className="photo" key={photo.id}>
            <Photo id={photo.name} key={photo.id}/>
        </div>
    )
})      


        return(
            <div className="container">
                <div className="photos-container-main">
                    <label htmlFor="sortBy">Sort By Color</label>
                    <select id="color_select"
                    onChange={e => this.updateSearchOption(e.target.value)}>
                        <option>Red</option>
                        <option>Orange</option>
                        <option>Yellow</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Purple</option>
                        <option>Black</option>
                        <option>Grey</option>
                        <option>White</option>
                    </select>
                    <div className="photos-container">
                    {photos}
                    </div>
                </div>
            </div>
        )
    }
}