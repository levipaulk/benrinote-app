import TokenService from './token-service'
import config from '../config'

const SectionsApiService = {
  getSections(pub_id) {
    return fetch(`${config.API_BASE_URL}/sections/${pub_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default SectionsApiService;