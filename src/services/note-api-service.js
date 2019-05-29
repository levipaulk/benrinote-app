import TokenService from './token-service'
import config from '../config'

const noteApiService = {
  getNotes(userId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}/notes`, {
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
  getNote(userId, noteId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}/notes/${noteId}`, {
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
  patchNote(noteId, userId, newNotes) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}/notes/${noteId}`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        text: newNotes,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteNote(noteId, userId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}/notes/${noteId}`, {
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

export default noteApiService