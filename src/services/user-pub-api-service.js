import TokenService from './token-service'
import config from '../config'

const UserPubApiService = {
  getUserInfo() {
    return fetch(`${config.API_BASE_URL}/userpub/userinfo`, {
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
  getUserPublications() {
    return fetch(`${config.API_BASE_URL}/userpub`, {
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
  postUserPublications(pub_id) {
    console.log(pub_id)
    return fetch(`${config.API_BASE_URL}/userpub/${pub_id}`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .catch(e => Promise.reject(e))
  },
  deleteUserPublications(pub_id) {
    return fetch(`${config.API_BASE_URL}/userpub/${pub_id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .catch(e => Promise.reject(e))
  }
}

export default UserPubApiService