import config from '../config'
import TokenService from './token-service';


const UserPhotosApiService = {

getUserPhotos(color) {
    return fetch(`${config.API_ENDPOINT}/:user_name/photos/${color}`, {
        headers: {
            'Authorization': `basic ${TokenService.getAuthToken()}`
        }
    })
},

postUserPhotos(photo, color) {
    return fetch(`${config.API_ENDPOINT}/:user_name/photos/${color}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `basic ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
            photo_info: photo,
        })
    })
}

}

export default UserPhotosApiService;