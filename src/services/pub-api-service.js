import TokenService from './token-service'
import config from '../config'

const publicationApiService = {
  getPublications() {
    return fetch(`${config.API_ENDPOINT}/publications`, {
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
  getPublication(publicationId) {
    return fetch(`${config.API_ENDPOINT}/publications/${publicationId}`, {
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
  postPublication(title, author_id, files) {
    return fetch(`${config.API_ENDPOINT}/publications`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        author_id,
        sections: files,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  patchPublication(publicationId, sectionId, newFile) {
    return fetch(`${config.API_ENDPOINT}/publications/${publicationId}/${sectionId}`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        section: newFile
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deletePublication(publicationId, sectionId) {
    return fetch(`${config.API_ENDPOINT}/publications/${publicationId}/${sectionId}`, {
      method: 'DELETE',
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

export default publicationApiService