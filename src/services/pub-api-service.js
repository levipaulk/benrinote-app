import TokenService from './token-service'
import config from '../config'

const PublicationApiService = {
  getPublications() {
    return fetch(`${config.API_BASE_URL}/publications`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPublication(pub_id) {
    return fetch(`${config.API_BASE_URL}/publications/${pub_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default PublicationApiService