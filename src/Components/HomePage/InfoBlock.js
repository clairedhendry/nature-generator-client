import React from 'react';
import './InfoBlock.css';
import ColorData from '../../ColorData/ColorData';
import config from '../../config';

// export const InfoBlock = () => {

//     return (
//         <div className="infoblock">
//             <h1>choose a color to begin your journey</h1>
//         </div>
//     )
// };


export default class InfoBLock extends React.Component {

    state = {
        colorChosen: null,
        categoryChosen: null,
        photoData: {
            hits: []
        },
    }

    componentDidMount() {
        const colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "black", "grey"];
        const color = colorArray[Math.floor(Math.random() * colorArray.length)];
        const colorItem = ColorData.imageCategories.find(item => item.color === color);
        const category = colorItem.category[(Math.floor(Math.random() * colorItem.category.length + 0))];

        const searchUrl = `https://pixabay.com/api/?key=${config.API_KEY}`;
        const searchCategory = `${encodeURIComponent("q")}=${encodeURIComponent(category)}`;
        const searchColor = `${encodeURIComponent("colors")}=${encodeURIComponent(color)}`;

        const queryField =
            searchUrl + `&` + searchCategory +
            `&image_type=photo&category=nature&safesearch="true"&order="latest"` +
            `&` + searchColor;

        fetch(queryField)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            })

            .then(data => {
                this.setState({
                    colorChosen: color,
                    categoryChosen: category,
                    photoData: data,
                })
            })
            .catch((err) => {
                alert(`something went wrong: ${err.message}`)
            })
    }
    getRandomInt(min, max) {
        min = Math.ceil(1);
        max = Math.floor(21);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    render() {

        const number = this.getRandomInt()
        return (
            <div className="landing-page">
                {this.state.photoData.hits.length === 0
                    ? <div>Loading background</div>
                    : <div className="landing-page-image"
                        style={{
                            backgroundImage: `url(${this.state.photoData.hits[number].largeImageURL})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}>

                        <div className="homepage-header">click a color to begin</div>
                        <h1>Escape to Nature</h1>
                    </div >}

            </div>
        )

    }
}