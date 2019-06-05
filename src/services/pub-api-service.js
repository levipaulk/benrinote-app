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

// =============================================================================
// Code below: work in progress
// =============================================================================

  // postPublication(title, author_id, files) {
  //   return fetch(`${config.API_BASE_URL}/publications`, {
  //     method: 'POST',
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`,
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       title,
  //       author_id,
  //       sections: files,
  //     }),
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  // patchPublication(publicationId, sectionId, newFile) {
  //   return fetch(`${config.API_BASE_URL}/publications/${publicationId}/${sectionId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`,
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       section: newFile
  //     }),
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  // deletePublication(publicationId, sectionId) {
  //   return fetch(`${config.API_BASE_URL}/publications/${publicationId}/${sectionId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // }
}

export default PublicationApiService