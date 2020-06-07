import React from 'react';
import ColorData from './ColorData/ColorData';
import config from './config';

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

state = {
    colorChosen: '',
    categoryChosen: '',
    chosenColorCategories: '',
    audio: {
        ogg: '',
        mp3: '',
    },
    slideshowEngaged: false,
    photoData: {
    hits: []
},
    orientation: 'portrait'
};


updateColorChosen = (color) => {

    const colorItem = ColorData.imageCategories.find(item => item.color === color);
    const category = colorItem.category[(Math.floor(Math.random() * colorItem.category.length + 0))];
   
    const orientation = this.state.orientation;
    const searchUrl = `https://pixabay.com/api/?key=${config.API_KEY}`;
    const searchCategory = `${encodeURIComponent("q")}=${encodeURIComponent(category)}`;
    const searchColor = `${encodeURIComponent("colors")}=${encodeURIComponent(color)}`;
  
    const queryField =
      searchUrl + `&` + searchCategory +
      `&image_type=photo&category=nature&orientation=${orientation}&safesearch="true"&per_page=50&order="latest"` +
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
      });
      
    fetch(`${config.API_BASE_URL}api/audio/${color}/${category}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
       
    })
    .then((res) => {
        if(res.ok) {
            return res.json();
        } else {
            throw new Error(res.statusText);
        }
    })
    .then(data => {
        this.setState({
            audio: {
                mp3: data[0].mp3_url,
                ogg: data[0].ogg_url
            }
        })
    })
    .catch((err) => {
        console.log(`something went wrong: ${err.message}`)
    })
};

updateSlideshowEngaged = () => {
    if(!this.state.slideshowEngaged)
    this.setState({
        slideshowEngaged: true,
    })
};

revertSlideshowEngaged = () => {
    this.setState({
        slideshowEngaged: false
    })
};

updateColorCategories = (value) => {
    const color = ColorData.imageCategories.find(color => color.color === value)
    this.setState({
        chosenColorCategories: color.category
    })
};

clearFetchData = () => {
    this.setState({
        photoData: []
    })
};


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
                    revertSlideshowEngaged: this.revertSlideshowEngaged,
                    updateColorCategories: this.updateColorCategories,
                    clearFetchData: this.clearFetchData,
                }
            }}>
                {this.props.children}
            </DataContext.Provider>
    )
};
}

export const DataConsumer = DataContext.Consumer;