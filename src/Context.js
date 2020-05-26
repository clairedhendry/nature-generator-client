import React from 'react'
import ColorData from './ColorData/ColorData'
import config from './config'
import slideshowApiService from './services/userphotos-api-services'

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

state = {
    colorChosen: "",
    categoryChosen: "",
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
    photoData: [],
    authorization: "",
    orientation: 'portrait'
}


updateColorChosen = (color) => {

    const colorItem = ColorData.imageCategories.find(item => item.color === color);
    const category = colorItem.category[(Math.floor(Math.random() * colorItem.category.length + 0))];
   
  
    const orientation = this.state.orientation
    const searchUrl = `https://pixabay.com/api/?key=15386213-fd2b415b0403776dbc63e2f69`;
    const searchCategory = `${encodeURIComponent("q")}=${encodeURIComponent(category)}`;
    const searchColor = `${encodeURIComponent("colors")}=${encodeURIComponent(color)}`;
  
    const queryField =
      searchUrl + `&` + searchCategory +
      `&image_type=photo&category=nature&orientation=${orientation}&safesearch="true"` +
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
      
    fetch(`http://localhost:8000/api/audio/${color}/${category}`, {
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
}



// updateAudioSource = (color, category) => {
//    if (this.state.categoryChosen.length === 0) {
//             this.setState({
//                 audio: {
//                     mp3: 'loading',
//                     ogg: 'loading'
//                 }
//             })    
//     } else {

//     fetch(`http://localhost:8000/api/audio/${color}/${category}`, {
//         method: 'GET',
//         headers: {
//             'content-type': 'application/json'
//         }
       
//     })
//     .then((res) => {
//         if(res.ok) {
//             return res.json();
//         } else {
//             throw new Error(res.statusText);
//         }
//     })
//     .then(data => {
//         this.setState({
//             audio: {
//                 mp3: data.mp3_url,
//                 ogg: data.ogg_url
//             }
//         })
//     })
//     .catch((err) => {
//         alert(`something went wrong: ${err.message}`)
//     })
// }
// }

updateSlideshowEngaged = () => {
    if(!this.state.slideshowEngaged)
    this.setState({
        slideshowEngaged: true,
    })
}

updateColorCategories = (value) => {
    const color = ColorData.imageCategories.find(color => color.color === value)
    this.setState({
        chosenColorCategories: color.category
    })
}

updateLoggedIn = () => {
    if(!this.state.loggedIn) {
        this.setState({
            loggedIn: true
        })
    }
}

clearFetchData = () => {
    this.setState({
        photoData: []
    })
}

//  fetchPhotos = () =>  {
//         const color = this.state.colorChosen
//         const category = this.state.categoryChosen
//         const orientation = this.state.orientation
//         const searchUrl = `https://pixabay.com/api/?key=15386213-fd2b415b0403776dbc63e2f69`;
//         const searchCategory = `${encodeURIComponent("q")}=${encodeURIComponent(category)}`;
//         const searchColor = `${encodeURIComponent("colors")}=${encodeURIComponent(color)}`;
      
//         const queryField =
//           searchUrl + `&` + searchCategory +
//           `&image_type=photo&category=nature&orientation=${orientation}&safesearch="true"` +
//           `&` + searchColor;
      
//         fetch(queryField)
//           .then((response) => {
//             if (response.ok) {
//               return response.json();
//             } else {
//               throw new Error(response.statusText);
//             }
//           })
         
//           .then(data => {
//               this.setState({
//                   colorChosen: "",
//                   categoryChosen: "",
//                   photoData: data,
//               })
//           })
//           .catch((err) => {
//             alert(`something went wrong: ${err.message}`)
//           });
        
//     }



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
                    clearFetchData: this.clearFetchData,
                }
            }}>
                {this.props.children}
            </DataContext.Provider>
    )
};
}

export const DataConsumer = DataContext.Consumer;